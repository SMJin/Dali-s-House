
$(document).ready(function () {
    $(".article-enter").on('click', function (e) {
        createArticle();
    });

    showArticles();

})

function createArticle() {
    let title = $('#article-title').val();
    if (title=='') {
        alert("제목을 입력해주세요.");
        $("#article-title").focus();
        return;
    }

    let content = $('#article-content').val();
    if (content=='') {
        alert("내용을 입력해주세요.");
        $('#article-content').focus();
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/api/articles',
        contentType: 'application/json',
        data: JSON.stringify({
            "title": title,
            "content": content
        }),
        success: function (response) {
            alert("게시물 작성이 완료되었습니다!");
            window.location.reload();
        }
    });
}

function showArticles() {
    $.ajax({
        type: 'GET',
        url: '/api/articles',
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                let article = response[i];
                let id = article.id;
                let title = article.title;
                let content = article.content;
                let updatedAt = article.updatedAt;
                let articleHTML = addHTML(id, title, content, updatedAt);
                $('.article-container').append(articleHTML);
            }
        }
    })

    // $(".edit-title").hide();
    // $(".edit-content").hide();
    // $(".submit-btn").hide();

}

function addHTML(id, title, content, updatedAt) {
    return `
        <div class="article-card">
            <div id="${id}-updatedAt" class="updatedAt">${updatedAt}</div>
            제목: <h2 id="${id}-title" class="title">${title}</h2>
            <input type="text" id="${id}-edit-title" class="edit-title">
            내용: <h1 id="${id}-content" class="content">${content}</h1>
            <textarea name="" id="${id}-edit-content" class="edit-content" cols="30" rows="10"></textarea>
            <button id="${id}-edit-btn" class="edit-btn" onclick="editArticle(${id})">수정하기</button>
            <button id="${id}-submit-btn" class="submit-btn" onclick="submitArticle(${id})">완료</button>
            <button id="${id}-delete-btn" class="delete-btn" onclick="deleteArticle(${id})">삭제하기</button>
        </div> 
    `;
}

function showEdits(id) {

    $(`#${id}-edit-title`).show();
    $(`#${id}-edit-content`).show();
    $(`#${id}-submit-btn`).show();

    $(`#${id}-title`).hide();
    $(`#${id}-content`).hide();
    $(`#${id}-edit-btn`).hide();

}

function hideEdits(id) {

    $(`#${id}-edit-title`).hide();
    $(`#${id}-edit-content`).hide();
    $(`#${id}-submit-btn`).hide();

    $(`#${id}-title`).show();
    $(`#${id}-content`).show();
    $(`#${id}-edit-btn`).show();

}

function editArticle(id) {

    showEdits(id);

    let title = $(`#${id}-title`).text().trim();
    $(`#${id}-edit-title`).val(title);
    let content = $(`#${id}-content`).text().trim();
    $(`#${id}-edit-content`).val(content);

}

function submitArticle(id) {

    let title = $(`#${id}-edit-title`).val();
    if (title=='') {
        alert("제목을 입력해주세요.");
        return;
    }

    let content = $(`#${id}-edit-content`).val();
    if (content=='') {
        alert("내용을 입력해주세요.");
        return;
    }

    let data = {
        'title': title,
        'content': content
    };

    $.ajax({
        type: 'PUT',
        url: `/api/articles/${id}`,
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (response) {
            alert("수정이 완료되었습니다!");
            hideEdits(id);
            window.location.reload();
        }
    });
}

function deleteArticle(id) {
    $.ajax({
        type: 'DELETE',
        url: `/api/articles/${id}`,
        success: function () {
            alert("삭제가 완료되었습니다!");
            window.location.reload();
        }
    })
}