package junghyeon.study.gaida_kotiln.ui.activity

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.View
import com.facebook.FacebookSdk
import junghyeon.study.gaida_kotiln.R
import junghyeon.study.gaida_kotiln.presenter.LoginPresenter
import junghyeon.study.gaida_kotiln.view.LoginView
import kotlinx.android.synthetic.main.activity_login.*
import kotlinx.android.synthetic.main.actvity_login2.*

class LoginActivity : BaseActivity(), LoginView {
    var presenter : LoginPresenter?=null
    var checkAble=false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        FacebookSdk.sdkInitialize(applicationContext)

        setContentView(R.layout.actvity_login2)
        presenter= LoginPresenter()
        presenter!!.addView(this)

        init()
    }

    private fun init(){
        password.addTextChangedListener(object : TextWatcher{
            override fun afterTextChanged(s: Editable?) {
                presenter!!.checkPasswordValidate()
            }
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
            }
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
            }
        })

        loginButton.setOnClickListener {
            login()
            presenter!!.nextMainActivity()

        }

        iv_login_check.setOnClickListener {
            checkAble=!checkAble
            when(checkAble){
                true-> iv_login_check.setImageResource(R.drawable.checked_normal)
                false-> iv_login_check.setImageResource(R.drawable.unchecked_normal)
            }
        }
    }

    private fun login(){
        presenter!!.login()
    }

    override fun getUserId(): String {
        return id.text.trim().toString()
    }

    override fun getUserPassword(): String {
       return password.text.trim().toString()
    }

    override fun getContext(): Context {
        return this
    }

    override fun showError(msg : String) {
        showToast(msg)
    }

    override fun showSuccess(msg : String) {
        showSuccess(msg)
    }

    override fun setCheckTextGone() {
        password_check.visibility= View.GONE
    }

    override fun setCheckTextVisible() {
        password_check.visibility= View.VISIBLE
    }


    override fun nextMainActivity() {
        Intent(this,MainActivity::class.java).let {
            startActivity(it)
            finish()
        }
    }
}
