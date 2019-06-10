package cn.qjm253.xueban_h5.activity.webview

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import cn.qjm253.xueban_h5.R
import cn.qjm253.xueban_h5.activity.qrcode.QrCodeActivity
import cn.qjm253.xueban_h5.views.XbWebView
import cn.qjm253.xueban_h5.web_bridge.AndroidToJs
import com.gyf.immersionbar.ImmersionBar
import com.tencent.smtt.export.external.interfaces.WebResourceError
import kotlinx.android.synthetic.main.activity_main.*

class WebViewActivity : AppCompatActivity() {

    private lateinit var androidToJs: AndroidToJs
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_web_view)

        ImmersionBar.with(this)
            .statusBarDarkFont(true)
            .init()

        // 初始化 Android 和 Js 交互操作
        androidToJs = AndroidToJs(this, webView)
        webView.addJavascriptInterface(androidToJs, AndroidToJs.JS_CALLER_NAME)
        webView.loadUrl("https://xueban.qjm253.cn/h5")
//        webView.loadUrl("file:///android_asset/www/index.html")
        webView.onWebViewLoadListener = object : XbWebView.OnWebViewLoadListener {
            override fun onLoadFail(error: WebResourceError) {
//                toast(R.string.load_fail)
            }

            override fun onLoadSuccess() {
                loading.progress = 10
            }

            override fun onProgress(progress: Int) {
                loading.progress = progress
                if (progress == 100) {
                    loading.hide()
                } else {
                    loading.show()
                }
            }
        }
    }


    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        when(requestCode) {
            AndroidToJs.REQUEST_CODE_SCAN -> {          // 调用扫描接口的返回结果
                data?.let {
                    // 扫描的结果
                    val result = data.getStringExtra(QrCodeActivity.QR_CODE_RESULT)
                    // 执行Js的回调，将数据传递给WebView
                    androidToJs.callJs(AndroidToJs.CALLBACK_SCAN_CODE, result)
                }
            }
        }
    }




    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
