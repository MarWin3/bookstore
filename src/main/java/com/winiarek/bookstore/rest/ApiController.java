package com.winiarek.bookstore.rest;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    @RequestMapping(method = RequestMethod.GET,value = "/hello", produces = "application/json")
    public String getHello(){

        return "Cześć Marcin!";
    }
}
