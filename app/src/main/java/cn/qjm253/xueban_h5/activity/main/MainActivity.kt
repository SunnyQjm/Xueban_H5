package cn.qjm253.xueban_h5.activity.main

import android.annotation.SuppressLint
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import cn.qjm253.xueban_h5.R
import cn.qjm253.xueban_h5.extensions.toast
import cn.qjm253.xueban_h5.utils.StatusBarUtil
import cn.qjm253.xueban_h5.utils.UtilsStyle
import cn.qjm253.xueban_h5.views.XbWebView
import com.tencent.smtt.export.external.interfaces.WebResourceError
import kotlinx.android.synthetic.main.activity_main.*
import java.lang.Exception

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        StatusBarUtil.transparencyBar(this)
        StatusBarUtil.StatusBarLightMode(this)
//        StatusBarUtil.setStatusBarColor(this, R.color.colorAccent)
        webView.loadUrl("https://xueban.qjm253.cn/h5")
        webView.onWebViewLoadListener = object: XbWebView.OnWebViewLoadListener {
            override fun onLoadFail(error: WebResourceError) {
                toast(R.string.load_fail)
            }

            override fun onLoadSuccess() {
                println("loadSuccess")
                loading.progress = 10
            }

            override fun onProgress(progress: Int) {
                loading.progress = progress
                if(progress == 100) {
                    loading.hide()
                } else {
                    loading.show()
                }
            }
        }
    }




    override fun onBackPressed() {
        if(webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
