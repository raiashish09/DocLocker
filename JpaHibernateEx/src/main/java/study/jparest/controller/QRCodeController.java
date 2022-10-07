//package study.jparest.controller;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import study.jparest.service.QRCodeService;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import java.io.IOException;
//import java.io.OutputStream;
//
//@Controller
//public class QRCodeController {
//
//    @Autowired
//    private QRCodeService qrCodeService;
//
//    @RequestMapping("/qr")
//    public String index() {
//        return "index";
//    }
//
//    @PostMapping("/showQRCode")
//    public String showQRCode(String qrContent, Model model,HttpServletRequest request) {
//    	
//        model.addAttribute("qrCodeContent", "/generateQRCode?qrContent=" + qrContent);
//        String link = qrContent;
//        model.addAttribute(link);
//        HttpSession session=request.getSession();
//        session.setAttribute("link", link);
//        return "show-qr-code";
//    }
//
//    @GetMapping("/generateQRCode")
//    public void generateQRCode(String qrContent, HttpServletResponse response) throws IOException {
//        response.setContentType("image/png");
//        byte[] qrCode = qrCodeService.generateQRCode(qrContent, 500, 500);
//        OutputStream outputStream = response.getOutputStream();
//        outputStream.write(qrCode);
//    }
//}
