package cn.qjm253.xueban_h5.activity.qrcode

import android.Manifest
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import cn.bingoogolapple.qrcode.core.QRCodeView
import cn.qjm253.xueban_h5.R
import kotlinx.android.synthetic.main.activity_qr_code.*
import pub.devrel.easypermissions.EasyPermissions
import android.os.Vibrator
import android.content.Context
import android.content.Intent
import cn.qjm253.xueban_h5.extensions.toast
import com.gyf.immersionbar.ImmersionBar


class QrCodeActivity : AppCompatActivity(), EasyPermissions.PermissionCallbacks {

    companion object {
        const val QR_CODE_RESULT = "QR_CODE_RESULT"
    }

    override fun onPermissionsDenied(requestCode: Int, perms: MutableList<String>) {
        println("拒绝权限")
        finish()
    }

    override fun onPermissionsGranted(requestCode: Int, perms: MutableList<String>) {
        zxingview.startCamera() // 打开后置摄像头开始预览，但是并未开始识别

        zxingview.startSpotAndShowRect() // 显示扫描框，并开始识别
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_qr_code)

        ImmersionBar.with(this)
            .statusBarDarkFont(true)
            .init()
        zxingview.setDelegate(object : QRCodeView.Delegate {
            override fun onScanQRCodeSuccess(result: String?) {
                // 识别成功，震动
                vibrate()

                // 并将识别的结果返回
                Intent()
                    .putExtra(QR_CODE_RESULT, result).let {
                        setResult(0, it)
                        finish()
                    }
            }

            override fun onCameraAmbientBrightnessChanged(isDark: Boolean) {
                println("onCameraAmbientBrightnessChanged")
            }

            override fun onScanQRCodeOpenCameraError() {
                toast(R.string.open_camera_error)
            }

        })

        zxingview.startCamera() // 打开后置摄像头开始预览，但是并未开始识别

        zxingview.startSpotAndShowRect() // 显示扫描框，并开始识别
    }

    override fun onStart() {
        super.onStart()
        requestQrCodePermissions()
    }

    override fun onStop() {
        super.onStop()
        zxingview.stopCamera()
    }

    override fun onDestroy() {
        zxingview.onDestroy()               // 销毁二维码扫描控件
        super.onDestroy()
    }

    private fun vibrate() {
        val vibrator = getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
        vibrator.vibrate(200)
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        EasyPermissions.onRequestPermissionsResult(requestCode, permissions, grantResults, this)
    }

    fun requestQrCodePermissions() {
        val permissions = arrayOf(Manifest.permission.CAMERA, Manifest.permission.READ_EXTERNAL_STORAGE)
        if (!EasyPermissions.hasPermissions(this, *permissions)) {
            EasyPermissions.requestPermissions(
                this, "扫描二维码需要打开相机和闪光灯权限",
                1, *permissions
            )
        }
    }
}
