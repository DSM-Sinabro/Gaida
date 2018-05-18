package junghyeon.study.gaida_kotiln.presenter

import android.annotation.SuppressLint
import junghyeon.study.gaida_kotiln.R
import junghyeon.study.gaida_kotiln.model.AuthModel
import junghyeon.study.gaida_kotiln.serivce.HttpService
import junghyeon.study.gaida_kotiln.view.BaseView
import junghyeon.study.gaida_kotiln.view.LoginView
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

/**
 * Created by 윤정현 on 2018-04-16.
 */

class LoginPresenter : BasePresenter<LoginView>{

    private var loginView: LoginView? = null

    fun login() {
        loginView?.let {
            if (it.passwordValidate()) {
                HttpService.api.signIn(it.getUserId(), it.getUserPassword())
                        .enqueue(object : Callback<AuthModel> {
                            @SuppressLint("ResourceType")
                            override fun onResponse(call: Call<AuthModel>?, response: Response<AuthModel>?) {
                                when (response!!.code()) {
                                    200 -> loginView!!.showSuccess("로그인 성공")
                                }
                            }
                            @SuppressLint("ResourceType")
                            override fun onFailure(call: Call<AuthModel>?, t: Throwable?) {
                                loginView!!.showError("로그인 실패")
                            }
                        })
            }
        }
    }

    fun checkPasswordValidate(){
        loginView?.let{
            if(it.passwordValidate()){
                it.setCheckTextGone()
            }else{
                it.setCheckTextVisible()
            }
        }
    }

    @SuppressLint("ResourceType")
    fun nextMainActivity(){
        //null 아닐때만
        loginView?.let {
            if(it.passwordValidate()){
                it.nextMainActivity()
            }else{
                it.showError("패스워드를 확인해주세요")
            }
        }
    }

    override fun addView(view: LoginView) {
        loginView = view
    }

    override fun removeView() {
        loginView = null
    }

}