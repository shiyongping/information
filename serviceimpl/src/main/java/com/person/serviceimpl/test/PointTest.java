package com.person.serviceimpl.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/**
 * @Author: shiyongping
 * @Date: 2019/8/30 16:46
 */
public class PointTest {
    public static void main(String [] args) {

        ApplicationContext appletContext = new ClassPathXmlApplicationContext("resources/spring-mvc.xml");
        bookService book = appletContext.getBean("bookService", bookService.class);
        book.getBook();

    }
}
