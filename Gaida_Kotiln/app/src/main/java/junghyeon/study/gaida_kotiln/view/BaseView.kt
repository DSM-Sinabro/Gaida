package junghyeon.study.gaida_kotiln.view

import android.content.Context
import android.support.annotation.IdRes

/**
 * Created by 윤정현 on 2018-04-16.
 */
interface BaseView {

    fun getContext() : Context
    fun showError(@IdRes id : Int)
    fun showSuccess(@IdRes id : Int)
}