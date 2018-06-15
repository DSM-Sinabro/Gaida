package junghyeon.study.gaida_kotiln.ui.activity

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import junghyeon.study.gaida_kotiln.R
import kotlinx.android.synthetic.main.activity_mypage.*

class MypageActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_mypage)


        ib_toolbar_back.setOnClickListener {
            Intent(this,MainActivity::class.java).let {
                startActivity(it)
                finish()
            }
        }
    }
}
