package junghyeon.study.gaida_kotiln.ui.activity

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.support.annotation.IdRes
import android.text.Editable
import android.text.TextWatcher
import android.view.View
import com.facebook.FacebookSdk
import junghyeon.study.gaida_kotiln.R
import junghyeon.study.gaida_kotiln.presenter.LoginPresenter
import junghyeon.study.gaida_kotiln.view.LoginView
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : BaseActivity(), LoginView {
    var presenter : LoginPresenter?=null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        FacebookSdk.sdkInitialize(applicationContext)

        setContentView(R.layout.activity_login)

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

    override fun showError(@IdRes id: Int) {
        showToast(id)
    }

    override fun showSuccess(@IdRes id: Int) {
        showSuccess(id)
    }

    override fun setCheckTextGone() {
        password_check.visibility= View.GONE
    }

    override fun setCheckTextVisible() {
        password_check.visibility= View.VISIBLE
    }


    override fun passwordValidate(): Boolean {
        var text=password.text.toString().trim()
        if (text.length == 0) {
            //맨처음
            return false
        }
        for (i in 0 until text.length) {
            //알파벳이 거나 숫자이면 true
            if (!Character.isLetterOrDigit(text.get(i))) {
                return true
            }
        }
        return false
    }

    override fun nextMainActivity() {
        Intent(this,MainActivity::class.java).let {
            startActivity(it)
            finish()
        }
    }
}
