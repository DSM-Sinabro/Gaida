package junghyeon.study.gaida_kotiln.ui.activity

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler

class SplashActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        next()
    }

    private fun next(){
        var delay= Runnable {
            Intent(this,LoginActivity::class.java).let {
                startActivity(it)
                finish()
            }
        }

        Handler().let {
            it.postDelayed(delay,1000)
        }
    }
}
