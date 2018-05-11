package junghyeon.study.gaida_kotiln.ui.fragment

import android.content.Context
import android.net.Uri
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

import junghyeon.study.gaida_kotiln.R

class MainListFragment : Fragment() {


    // TODO: Rename and change types of parameters
    private var mConfrim: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (arguments != null) {
            mConfrim = arguments!!.getInt(CONFIRM)
        }
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_main_list, container, false)

    }

    companion object {
        // TODO: Rename parameter arguments, choose names that match
        // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
        private val CONFIRM = "confirm"

        fun newInstance(confirm: Int): MainListFragment {
            val fragment = MainListFragment()
            val args = Bundle()
            args.putInt(CONFIRM, confirm)
            fragment.arguments = args
            return fragment
        }
    }
}// Required empty public constructor
