package junghyeon.study.gaida_kotiln.ui.recyclerAdapter.viewHolder

import android.support.v7.widget.RecyclerView
import android.view.View
import android.widget.TextView
import com.volokh.danylo.video_player_manager.ui.VideoPlayerView




class VideoViewHolder(v : View) : RecyclerView.ViewHolder(v) {

    lateinit var view : View

    init {
        view=v
    }


    fun bind(){
        with(view){
            /*  mPlayer = view.findViewById(R.id.player) as VideoPlayerView
              mTitle = view.findViewById(R.id.title) as TextView
              mCover = view.findViewById(R.id.cover) as ImageView
              mVisibilityPercents = view.findViewById(R.id.visibility_percents) as TextView*/

        }
    }


}