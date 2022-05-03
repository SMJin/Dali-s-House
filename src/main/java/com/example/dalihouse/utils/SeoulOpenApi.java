package com.example.dalihouse.utils;

import com.example.dalihouse.dto.Adoption.AdoptionThumbnailDto;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class SeoulOpenApi {

    public String search(int startIdx, int endIdx) {
        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        StringBuilder sb = new StringBuilder();
        sb.append("{\n");
        sb.append("  \"id\": 1,\n");
        sb.append("  \"title\": \"asfdaaaaaa\",\n");
        sb.append("  \"content\": \"gggdggggggggggggggg\",\n");
        sb.append("  \"authorId\": 1,\n");
        sb.append("  \"startTime\": 220422,\n");
        sb.append("  \"endTime\": 220427,\n");
        sb.append("  \"place\": \"단국대학교\",\n");
        sb.append("  \"limitNumOfPeople\": 10,\n");
        sb.append("  \"imgUrl\": \"/assets/vol_img.png\"\n");
        sb.append("}");
        String body = sb.toString();

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        ResponseEntity<String> responseEntity = rest.exchange("http://openapi.seoul.go.kr:8088/714a75414b7373743830696765516a/json/TbAdpWaitAnimalView/"+startIdx+"/"+endIdx+"/", HttpMethod.GET, requestEntity, String.class);
        HttpStatus httpStatus = responseEntity.getStatusCode();
        int status = httpStatus.value();
        String response = responseEntity.getBody();
        System.out.println("Response status: " + status);
        System.out.println(response);

        return response;
    }

    public List<AdoptionThumbnailDto> fromJSONtoItems(String result) {
        JSONObject json = new JSONObject(result);
        JSONObject json2 = json.getJSONObject("TbAdpWaitAnimalView");
        JSONArray items = json2.getJSONArray("row");

        List<AdoptionThumbnailDto> itemDtoList = new ArrayList<>();

        for (int i=0; i<items.length(); i++) {
            JSONObject itemJson = items.getJSONObject(i);
            AdoptionThumbnailDto dto = new AdoptionThumbnailDto(itemJson);
            itemDtoList.add(dto);
        }

        return itemDtoList;
    }

    public static void main(String[] args) throws IOException {
        SeoulOpenApi seoulOpenApi = new SeoulOpenApi();
        String result = seoulOpenApi.search(1, 1);

        List<AdoptionThumbnailDto> resultList = seoulOpenApi.fromJSONtoItems(result);
        System.out.println(resultList);
    }

}
