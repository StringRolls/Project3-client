import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <hr className="lineFooter" />
        <h4 className="title"> Developed by us </h4>
        <div className="developers">
          <div className="developers1">
            <a
              href="https://www.linkedin.com/in/luisaojeda/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                className="linkedin"
                alt="Linkedin-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUCZ5r///8AXZQAX5XC0d6lvdAAVpGGp8IAY5gAW5MAWZLc5Oz09/lgj7IAZZkAWJJ5or/T4eqUtczg6vFRirDG1+M/fKaJqcMxeaVnmLiju8+vx9gLa51Fg6thk7XA1OEfcaG1zNzo8PVxnrwrRTZEAAADcklEQVR4nO3cbXeaMBiAYUlqDUij4Lviqu7//8fp0LVKHmsHTdqc+/o63OE+2EAg2OsBAAAAAAAAAAAAAAAAAAAAAAAAn2SNPjKhd+OrWJUtV+W6HL/0shgjbTrf5MnZZKF16B3qmq5myXv5eGRD71On1DS5NUtD71SX9K9GYJIUKp6jaLaOwONRHIXesa5YlTsLk3Esw40u3YFJHslJw2rhECbJII6DaFzDzHmwiWM81X2xMImjMJ3JhcsoThjpUC6cRjHWpIVc+BJFoXqN/Vt6b6TRURSalRg4yULvXDcqsbAfxxm/l4p/iMsoBprjZdtcCIxnipju3YW7KMaZv4zz2juaydOR3TkSy2i+oyemN7kNHERypriw6noaXMxV6F3qmtVmcbkEz/fTyO4lnpm02q4Gi9VOqUjOgw6nBxcmysMHAD+L0So9Udp8m5OOUW7/8V/pzE4Xm1kxHBb7/mJaZd/iPogpn5xm14lWu70lWGUHNzfuDv1tGn6Kop6EGfDz+63stO82vySmO+c881Da0Ne4jxXqhbDV+Z6quXPPbh14fceDhYO7hWorPsE6yl+ykH+PXRRm0r9e7EM+M++g8PnOXeWziQ2X2L5w9HHg8ZtaBUtsXZhJj8mvHYIdxbaF2e+HApOkCLW4o22hdEO5qR/o9l3bwnuniRuBnri2LDw8HpgcwtyibFn4KYsgF6k+C8MsQvJZGOYgei0M8pfotTDIcOq3cB9gsthZYbEpB4PytfEY60r+cwvXVaZOdzXUaLm5t93c/9VpJ4Wz3tsE0Kb3psOl/9G0i8Ly+nGcqeQrnQDrHzooXN/OGsxO3Db3f75oX+iYFil588pb2b+daVuYux45puL3dOt9qGld6FyWIt59TFbez/ltCyfuqbuWtvc/mLYt/OU+Jpm0Mtf/esCWhYUwNuq18IGN96ualoXSfEhct/r60wqlgeMbLXns5LmFg7Qy1/97Kl9UaN0rHpNkGEthT3olLp7CjEJvKKxR2EShPxTWKGyi0B8KaxQ2UegPhTUKmyj0h8IahU0U+kNhjcImCv2hsEZhE4X+UFijsIlCfyisUdhEoT/dvMvdJBVOvBeasftF+83VgrWP38e/pdfuDwR4McgIv5ZwvdXHv6lwS/hA+N9YAAAAAAAAAAAAAAAAAAAAAAAAwA/xB7fDQCjkp1xMAAAAAElFTkSuQmCC"
              ></img>
            </a>
            <p className="nameDeveloper"> Luisa </p>
          </div>
          <div className="developers1">
            <a
              href="https://www.linkedin.com/in/pablo-dellacassa/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                className="linkedin"
                alt="Linkedin-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUCZ5r///8AXZQAX5XC0d6lvdAAVpGGp8IAY5gAW5MAWZLc5Oz09/lgj7IAZZkAWJJ5or/T4eqUtczg6vFRirDG1+M/fKaJqcMxeaVnmLiju8+vx9gLa51Fg6thk7XA1OEfcaG1zNzo8PVxnrwrRTZEAAADcklEQVR4nO3cbXeaMBiAYUlqDUij4Lviqu7//8fp0LVKHmsHTdqc+/o63OE+2EAg2OsBAAAAAAAAAAAAAAAAAAAAAAAAn2SNPjKhd+OrWJUtV+W6HL/0shgjbTrf5MnZZKF16B3qmq5myXv5eGRD71On1DS5NUtD71SX9K9GYJIUKp6jaLaOwONRHIXesa5YlTsLk3Esw40u3YFJHslJw2rhECbJII6DaFzDzHmwiWM81X2xMImjMJ3JhcsoThjpUC6cRjHWpIVc+BJFoXqN/Vt6b6TRURSalRg4yULvXDcqsbAfxxm/l4p/iMsoBprjZdtcCIxnipju3YW7KMaZv4zz2juaydOR3TkSy2i+oyemN7kNHERypriw6noaXMxV6F3qmtVmcbkEz/fTyO4lnpm02q4Gi9VOqUjOgw6nBxcmysMHAD+L0So9Udp8m5OOUW7/8V/pzE4Xm1kxHBb7/mJaZd/iPogpn5xm14lWu70lWGUHNzfuDv1tGn6Kop6EGfDz+63stO82vySmO+c881Da0Ne4jxXqhbDV+Z6quXPPbh14fceDhYO7hWorPsE6yl+ykH+PXRRm0r9e7EM+M++g8PnOXeWziQ2X2L5w9HHg8ZtaBUtsXZhJj8mvHYIdxbaF2e+HApOkCLW4o22hdEO5qR/o9l3bwnuniRuBnri2LDw8HpgcwtyibFn4KYsgF6k+C8MsQvJZGOYgei0M8pfotTDIcOq3cB9gsthZYbEpB4PytfEY60r+cwvXVaZOdzXUaLm5t93c/9VpJ4Wz3tsE0Kb3psOl/9G0i8Ly+nGcqeQrnQDrHzooXN/OGsxO3Db3f75oX+iYFil588pb2b+daVuYux45puL3dOt9qGld6FyWIt59TFbez/ltCyfuqbuWtvc/mLYt/OU+Jpm0Mtf/esCWhYUwNuq18IGN96ualoXSfEhct/r60wqlgeMbLXns5LmFg7Qy1/97Kl9UaN0rHpNkGEthT3olLp7CjEJvKKxR2EShPxTWKGyi0B8KaxQ2UegPhTUKmyj0h8IahU0U+kNhjcImCv2hsEZhE4X+UFijsIlCfyisUdhEoT/dvMvdJBVOvBeasftF+83VgrWP38e/pdfuDwR4McgIv5ZwvdXHv6lwS/hA+N9YAAAAAAAAAAAAAAAAAAAAAAAAwA/xB7fDQCjkp1xMAAAAAElFTkSuQmCC"
              ></img>
            </a>
            <p className="nameDeveloper"> Pablo</p>
          </div>
          <div className="developers1">
            <a
              href="https://www.linkedin.com/in/samy-ali-sanchez/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin"
                alt="Linkedin-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUCZ5r///8AXZQAX5XC0d6lvdAAVpGGp8IAY5gAW5MAWZLc5Oz09/lgj7IAZZkAWJJ5or/T4eqUtczg6vFRirDG1+M/fKaJqcMxeaVnmLiju8+vx9gLa51Fg6thk7XA1OEfcaG1zNzo8PVxnrwrRTZEAAADcklEQVR4nO3cbXeaMBiAYUlqDUij4Lviqu7//8fp0LVKHmsHTdqc+/o63OE+2EAg2OsBAAAAAAAAAAAAAAAAAAAAAAAAn2SNPjKhd+OrWJUtV+W6HL/0shgjbTrf5MnZZKF16B3qmq5myXv5eGRD71On1DS5NUtD71SX9K9GYJIUKp6jaLaOwONRHIXesa5YlTsLk3Esw40u3YFJHslJw2rhECbJII6DaFzDzHmwiWM81X2xMImjMJ3JhcsoThjpUC6cRjHWpIVc+BJFoXqN/Vt6b6TRURSalRg4yULvXDcqsbAfxxm/l4p/iMsoBprjZdtcCIxnipju3YW7KMaZv4zz2juaydOR3TkSy2i+oyemN7kNHERypriw6noaXMxV6F3qmtVmcbkEz/fTyO4lnpm02q4Gi9VOqUjOgw6nBxcmysMHAD+L0So9Udp8m5OOUW7/8V/pzE4Xm1kxHBb7/mJaZd/iPogpn5xm14lWu70lWGUHNzfuDv1tGn6Kop6EGfDz+63stO82vySmO+c881Da0Ne4jxXqhbDV+Z6quXPPbh14fceDhYO7hWorPsE6yl+ykH+PXRRm0r9e7EM+M++g8PnOXeWziQ2X2L5w9HHg8ZtaBUtsXZhJj8mvHYIdxbaF2e+HApOkCLW4o22hdEO5qR/o9l3bwnuniRuBnri2LDw8HpgcwtyibFn4KYsgF6k+C8MsQvJZGOYgei0M8pfotTDIcOq3cB9gsthZYbEpB4PytfEY60r+cwvXVaZOdzXUaLm5t93c/9VpJ4Wz3tsE0Kb3psOl/9G0i8Ly+nGcqeQrnQDrHzooXN/OGsxO3Db3f75oX+iYFil588pb2b+daVuYux45puL3dOt9qGld6FyWIt59TFbez/ltCyfuqbuWtvc/mLYt/OU+Jpm0Mtf/esCWhYUwNuq18IGN96ualoXSfEhct/r60wqlgeMbLXns5LmFg7Qy1/97Kl9UaN0rHpNkGEthT3olLp7CjEJvKKxR2EShPxTWKGyi0B8KaxQ2UegPhTUKmyj0h8IahU0U+kNhjcImCv2hsEZhE4X+UFijsIlCfyisUdhEoT/dvMvdJBVOvBeasftF+83VgrWP38e/pdfuDwR4McgIv5ZwvdXHv6lwS/hA+N9YAAAAAAAAAAAAAAAAAAAAAAAAwA/xB7fDQCjkp1xMAAAAAElFTkSuQmCC"
              ></img>
            </a>
            <p className="nameDeveloper"> Samy</p>
          </div>
          <div className="developers1">
            <a
              href="https://www.linkedin.com/in/wuqingguibjork/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                className="linkedin"
                alt="Linkedin-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUCZ5r///8AXZQAX5XC0d6lvdAAVpGGp8IAY5gAW5MAWZLc5Oz09/lgj7IAZZkAWJJ5or/T4eqUtczg6vFRirDG1+M/fKaJqcMxeaVnmLiju8+vx9gLa51Fg6thk7XA1OEfcaG1zNzo8PVxnrwrRTZEAAADcklEQVR4nO3cbXeaMBiAYUlqDUij4Lviqu7//8fp0LVKHmsHTdqc+/o63OE+2EAg2OsBAAAAAAAAAAAAAAAAAAAAAAAAn2SNPjKhd+OrWJUtV+W6HL/0shgjbTrf5MnZZKF16B3qmq5myXv5eGRD71On1DS5NUtD71SX9K9GYJIUKp6jaLaOwONRHIXesa5YlTsLk3Esw40u3YFJHslJw2rhECbJII6DaFzDzHmwiWM81X2xMImjMJ3JhcsoThjpUC6cRjHWpIVc+BJFoXqN/Vt6b6TRURSalRg4yULvXDcqsbAfxxm/l4p/iMsoBprjZdtcCIxnipju3YW7KMaZv4zz2juaydOR3TkSy2i+oyemN7kNHERypriw6noaXMxV6F3qmtVmcbkEz/fTyO4lnpm02q4Gi9VOqUjOgw6nBxcmysMHAD+L0So9Udp8m5OOUW7/8V/pzE4Xm1kxHBb7/mJaZd/iPogpn5xm14lWu70lWGUHNzfuDv1tGn6Kop6EGfDz+63stO82vySmO+c881Da0Ne4jxXqhbDV+Z6quXPPbh14fceDhYO7hWorPsE6yl+ykH+PXRRm0r9e7EM+M++g8PnOXeWziQ2X2L5w9HHg8ZtaBUtsXZhJj8mvHYIdxbaF2e+HApOkCLW4o22hdEO5qR/o9l3bwnuniRuBnri2LDw8HpgcwtyibFn4KYsgF6k+C8MsQvJZGOYgei0M8pfotTDIcOq3cB9gsthZYbEpB4PytfEY60r+cwvXVaZOdzXUaLm5t93c/9VpJ4Wz3tsE0Kb3psOl/9G0i8Ly+nGcqeQrnQDrHzooXN/OGsxO3Db3f75oX+iYFil588pb2b+daVuYux45puL3dOt9qGld6FyWIt59TFbez/ltCyfuqbuWtvc/mLYt/OU+Jpm0Mtf/esCWhYUwNuq18IGN96ualoXSfEhct/r60wqlgeMbLXns5LmFg7Qy1/97Kl9UaN0rHpNkGEthT3olLp7CjEJvKKxR2EShPxTWKGyi0B8KaxQ2UegPhTUKmyj0h8IahU0U+kNhjcImCv2hsEZhE4X+UFijsIlCfyisUdhEoT/dvMvdJBVOvBeasftF+83VgrWP38e/pdfuDwR4McgIv5ZwvdXHv6lwS/hA+N9YAAAAAAAAAAAAAAAAAAAAAAAAwA/xB7fDQCjkp1xMAAAAAElFTkSuQmCC"
              ></img>
            </a>
            <p className="nameDeveloper"> Bjork </p>
          </div>
        </div>
        <p className="tagfooter"> © 2022 Sharelicious</p>
      </footer>
    </>
  );
}
