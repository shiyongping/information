package com.person.domain.user;


import com.person.core.annotation.annotationtest;

import java.io.Serializable;
import java.util.Date;
@annotationtest()
public class User implements Serializable {
    private Integer id;
    private String useroaid;
    private String username;
    private String name;

    private String password;

    private String phone;

    private String address;

    private String sattus;

    private String ynflag;

    private String createuser;

    private String modifier;

    private Date createtime;

    private Date updtetime;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUseroaid() {
        return useroaid;
    }

    public void setUseroaid(String useroaid) {
        this.useroaid = useroaid == null ? null : useroaid.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getSattus() {
        return sattus;
    }

    public void setSattus(String sattus) {
        this.sattus = sattus == null ? null : sattus.trim();
    }

    public String getYnflag() {
        return ynflag;
    }

    public void setYnflag(String ynflag) {
        this.ynflag = ynflag == null ? null : ynflag.trim();
    }

    public String getCreateuser() {
        return createuser;
    }

    public void setCreateuser(String createuser) {
        this.createuser = createuser == null ? null : createuser.trim();
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier == null ? null : modifier.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Date getUpdtetime() {
        return updtetime;
    }

    public void setUpdtetime(Date updtetime) {
        this.updtetime = updtetime;
    }
}