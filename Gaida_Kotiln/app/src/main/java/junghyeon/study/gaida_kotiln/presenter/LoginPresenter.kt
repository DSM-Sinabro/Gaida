package junghyeon.study.gaida_kotiln.presenter

import android.annotation.SuppressLint
import android.widget.Toast
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
   /*         if(it.getUserId().equals("1234") && it.getUserPassword().equals("1234")){
                Toast.makeText(it.getContext(),"로그인 성공",Toast.LENGTH_SHORT).show()
                it.nextMainActivity()
            }else{
                Toast.makeText(it.getContext(),"아이디 비밀번호를 다시 입력해주세요",Toast.LENGTH_SHORT).show()
            }*/

            HttpService.api.signIn(it.getUserId(),it.getUserPassword()).enqueue(object : Callback<AuthModel>{
                override fun onFailure(call: Call<AuthModel>?, t: Throwable?) {
                    TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
                }

                override fun onResponse(call: Call<AuthModel>?, response: Response<AuthModel>?) {
                    when(response!!.code()){
                        200-> Toast.makeText(it.getContext(),"로그인 성공",Toast.LENGTH_SHORT).show()
                        else ->{
                            Toast.makeText(it.getContext(),"아이디 비밀번호를 다시 입력해주세요",Toast.LENGTH_SHORT).show()
                        }
                    }
                }

            })
        }
    }

    fun checkPasswordValidate(){
        loginView?.let{
            it.setCheckTextGone()
        }
    }

    @SuppressLint("ResourceType")
    fun nextMainActivity(){
        //null 아닐때만
        loginView?.let {
            if(true){
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