
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
                let articleHTML = addHTML(article);
                console.log(article);
                console.log(articleHTML);
                $('.article-container').append(articleHTML);
            }
        }
    })
}

function addHTML(article) {
    return `
        <div class="article-card">
            <h2 class="title">제목: ${article.title}</h2>
            <h1 class="content">내용: ${article.content}</h1>
        </div> 
    `;
}