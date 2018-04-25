package junghyeon.study.gaida_kotiln.ui.activity

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.annotation.IdRes
import android.widget.Toast
import junghyeon.study.gaida_kotiln.R

open class BaseActivity : AppCompatActivity() {

    fun showToast(idRes: Int){
        Toast.makeText(this,idRes, Toast.LENGTH_SHORT).show()
    }
}
