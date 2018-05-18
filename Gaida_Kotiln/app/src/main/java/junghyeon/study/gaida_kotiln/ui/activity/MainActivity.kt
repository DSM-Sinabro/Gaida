package junghyeon.study.gaida_kotiln.ui.activity

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.design.widget.*
import android.support.v4.view.GravityCompat
import android.support.v4.view.ViewPager
import android.support.v4.widget.DrawerLayout
import android.support.v7.widget.GridLayoutManager
import android.support.v7.widget.LinearLayoutManager
import android.view.Gravity
import android.view.LayoutInflater
import android.view.MenuItem
import android.view.View
import android.widget.TextView
import junghyeon.study.gaida_kotiln.R
import junghyeon.study.gaida_kotiln.ui.fragment.MainListFragment
import junghyeon.study.gaida_kotiln.ui.recyclerAdapter.MainBottomRecyclerAdapter
import junghyeon.study.gaida_kotiln.ui.viewpagerAdapter.MainPagerAdapter
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.toolbar.*
import kotlinx.android.synthetic.main.view_bottom_sheet_main.*
import kotlinx.android.synthetic.main.view_bottom_sheet_main.view.*

class MainActivity : BaseActivity(){

    var bottomSheetAdapter : MainBottomRecyclerAdapter?=null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        tab.addOnTabSelectedListener(TabLayout.ViewPagerOnTabSelectedListener(view_pager_main))
        view_pager_main.addOnPageChangeListener(TabLayout.TabLayoutOnPageChangeListener(tab))
        view_pager_main.adapter = MainPagerAdapter(supportFragmentManager)

        view_pager_main.offscreenPageLimit = 3
        view_pager_main.addOnPageChangeListener(object : ViewPager.OnPageChangeListener{
            override fun onPageScrollStateChanged(state: Int) { }
            override fun onPageScrolled(position: Int, positionOffset: Float, positionOffsetPixels: Int) { }
            override fun onPageSelected(position: Int) {

            }
        })

        setBottomSheet()
        floating_button.setOnClickListener {
            bottomSheet.show()
        }
    }

    lateinit var bottomSheet: BottomSheetDialog

    private fun setBottomSheet(){
        bottomSheet = BottomSheetDialog(this)
        val bottomSheetView = LayoutInflater.from(this).inflate(R.layout.view_bottom_sheet_main, null)
        setBottomSheetView(bottomSheetView)
        bottomSheet.setContentView(bottomSheetView)

        val bottomSheetBehavior = BottomSheetBehavior.from(bottomSheetView.parent as View)
        bottomSheetBehavior.peekHeight = resources.getDimensionPixelSize(R.dimen.size_bottom_sheet)

        with(bottomSheetView){
            bottomSheetAdapter= MainBottomRecyclerAdapter()
            main_bottom_sheet_recyclerView.layoutManager= GridLayoutManager(context,3)
            main_bottom_sheet_recyclerView.adapter=bottomSheetAdapter
        }



    }

    private fun setBottomSheetView(view: View){
        with(view){
            ib_bottom_sheet_sub_icon.setOnClickListener { bottomSheet.dismiss() }
        }
    }
}
