package com.person.serviceimpl.test;

import com.person.core.simpleTest;
import com.person.domain.user.User;
import com.person.domain.user.userExt;

/**
 * @Author: shiyongping
 * @Date: 2019/8/27 17:27
 */
public class anntationtest {

    public static void main(String [] args){
        simpleTest simpleTest = new simpleTest();
        simpleTest.getInformatuon(userExt.class);
    }

}
