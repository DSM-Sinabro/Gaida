package junghyeon.study.gaida_kotiln.presenter

import android.content.Context

/**
 * Created by 윤정현 on 2018-04-16.
 */
interface BasePresenter<T> {

    fun addView(view : T)
    fun removeView()
}