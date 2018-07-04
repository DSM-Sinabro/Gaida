package junghyeon.study.gaida_kotiln.view

import android.support.annotation.IdRes

/**
 * Created by 윤정현 on 2018-04-16.
 */
interface LoginView : BaseView{

    fun getUserId() : String
    fun getUserPassword() : String
    fun setCheckTextVisible()
    fun setCheckTextGone()
    fun nextMainActivity()
}