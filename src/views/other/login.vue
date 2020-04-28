<!--
 * @Date: 2020-04-28 14:34:58
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-28 16:07:24
 * @Description: 
 * @FilePath: /H5SalesCMS/src/views/other/login.vue
 -->
<template>
    <div class="login">
        <div class="ms-login LoadingMask">
            <div class="ms-title">销售管理系统</div>
            <div class="login-area">
                <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="0px"
                class="ms-content"
                >
                    <el-form-item prop="username" class="input">
                        <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" class="input">
                        <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="ruleForm.password"
                        @keyup.enter.native="submitForm('ruleForm')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="verifyCode" class="input verify-code">
                        <el-input
                        type="text"
                        placeholder="请输入验证码"
                        v-model="ruleForm.verifyCode"
                        @keyup.enter.native="submitForm('ruleForm')"
                        ></el-input>
                        <div class="verify-code-area">
                            <div class="verify-img">
                                <img :src="imgVerifyBase64" alt="验证码" />
                            </div>
                            <i
                                @click="getVerificaitonCode"
                                style="color:#cccccc;cursor:pointer;"
                                class="text-24 el-icon-refresh-right color-gray"
                            ></i>
                        </div>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                </el-form>
                <div class="login-image"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {$getImgVerifyCode,$loginMSM,$getSliderMenus} from '@/api/login'
    export default {
        name:'login',
        data() {
            return {
                //  表单
                ruleForm: {
                    username: "",
                    password: "",
                    verifyCode: ""
                },
                // 规则
                rules: {
                    username: [
                        { required: true, message: "请输入用户名", trigger: "blur" }
                    ],
                    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
                },
                imgVerifyBase64: "",  // 验证码图片
                radomKey:'',  // 随机数
                getVerificationFlag:true,  // 获取验证码开关
            }
        },
        created() {
            this.getVerificaitonCode();
        },
        methods: {
            /**
             * 登录验证
             */
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        $loginMSM({
                            showLoading: false,
                            params: {
                                code: this.ruleForm.verifyCode,
                                mobile: this.ruleForm.username,
                                password: this.$md5(this.ruleForm.password),
                                randomKey: this.radomKey
                            }
                        }).then(res => {
                            sessionStorage.setItem("mr-token", res.data.data.token);
                            sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
                            this.getMenuData()
                        });
                    } else {
                        return false;
                    }
                });
            },
            /**
             * 获取验证码
             */
            getVerificaitonCode() {
                this.getRadomKey();
                if (this.getVerificationFlag) {
                    this.getVerificationFlag = false;
                    $getImgVerifyCode({
                        params: {
                            randomKey: this.radomKey
                        }
                    })
                    .then(res => {
                        this.imgVerifyBase64 = "data:image/jpg;base64," + res.data.data;
                        this.getVerificationFlag = true;
                    })
                    .catch(err => {
                        this.getVerificationFlag = true;
                    });
                }
            },
            /**
             * 获取随机数
             */
            getRadomKey() {
                this.radomKey = Math.floor(Math.random() * 10000000000);
            },
            /**
             * 获取菜单
             */
            async getMenuData(){
                const {data}=await $getSliderMenus();
                sessionStorage.setItem(
                    "sliderMenuData",
                    JSON.stringify(data.data)
                );
                // 无论何种身份，默认跳菜单列表第一个页面
                if (data.data[0].type == 1) {
                    this.go(data.data[0].childMenus[0].url);
                } else if (data.data[0].type == 2) {
                    this.go(data.data[0].url);
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .login{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #f2f6fc;
        box-sizing: border-box;
        .ms-login {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 1200px;
            .ms-title {
                width: 100%;
                text-align: left;
                font-size: 30px;
                color: #7f8fa4;
                text-indent: 100px;
                margin-bottom: 20px;
            }
            .login-area {
                background: #fff;
                display: flex;
                box-shadow: 0 8px 30px rgba(53, 145, 250, 0.1);
                border-radius: 24px;
                justify-content: space-between;
                overflow: hidden;
                .ms-content {
                    margin: 130px auto 0;
                    width: 280px;
                    .input {
                        margin-bottom: 15px;
                    }
                    .verify-code {
                        position: relative;
                        .verify-code-area {
                            position: absolute;
                            right: 1%;
                            top: 2px;
                            display: flex;
                            height: 30px;
                            align-items: center;
                            .verify-img {
                                height: 25px;
                                width: 50px;
                                background-color: #cccccc;
                                display: flex;
                                align-items: center;
                                > img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                    .login-btn {
                        text-align: center;
                        height: 50px;
                        margin-top: 30px;
                        button {
                            box-shadow: 0 8px 30px rgba(53, 145, 250, 0.6);
                            display: block;
                            width: 100%;
                            height: 36px;
                            margin-bottom: 10px;
                        }
                    }
                }
                .login-image {
                    width: 500px;
                    height: 500px;
                    background: url("../../assets/img/login_bg.png") no-repeat;
                    background-size: cover;
                }
            }
        }
    }
</style>