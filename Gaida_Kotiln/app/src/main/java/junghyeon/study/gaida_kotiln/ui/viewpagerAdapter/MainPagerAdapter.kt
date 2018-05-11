package junghyeon.study.gaida_kotiln.ui.viewpagerAdapter

import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v4.app.FragmentPagerAdapter
import junghyeon.study.gaida_kotiln.ui.fragment.MainListFragment

/**
 * Created by 윤정현 on 2018-04-25.
 */

class MainPagerAdapter(fm :FragmentManager) : FragmentPagerAdapter(fm) {

    override fun getItem(position: Int): Fragment {
        return MainListFragment.newInstance(position)
    }

    override fun getCount(): Int {
        return 3
    }

}