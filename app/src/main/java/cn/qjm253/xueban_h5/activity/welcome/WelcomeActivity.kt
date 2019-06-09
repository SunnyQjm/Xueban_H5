package cn.qjm253.xueban_h5.activity.welcome

import android.content.Intent
import android.graphics.Color
import android.os.Build
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.WindowManager
import cn.qjm253.xueban_h5.GlideApp
import cn.qjm253.xueban_h5.R
import cn.qjm253.xueban_h5.activity.main.MainActivity
import cn.qjm253.xueban_h5.activity.qrcode.QrCodeActivity
import cn.qjm253.xueban_h5.utils.ConstellationUtil
import kotlinx.android.synthetic.main.activity_welcome.*

class WelcomeActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (!this.isTaskRoot) {
            val mainIntent = intent
            val action = mainIntent.action
            if (mainIntent.hasCategory(Intent.CATEGORY_LAUNCHER) && action == Intent.ACTION_MAIN) {
                finish()
                return
            }
        }

        setContentView(R.layout.activity_welcome)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            val window = window
            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS or WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION)
            window.decorView.systemUiVisibility = (View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_LAYOUT_STABLE)
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
            window.statusBarColor = Color.TRANSPARENT
            window.navigationBarColor = Color.TRANSPARENT
        }

        GlideApp.with(img_constellation)
            .load(ConstellationUtil.getUrls())
            .centerCrop()
            .into(img_constellation)

        img_constellation.postDelayed({
//            startActivity(Intent(this, QrCodeActivity::class.java))
            startActivity(Intent(this, MainActivity::class.java))
            finish()
        }, 500)
    }
}
