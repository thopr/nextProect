import React, { useState, useEffect, useMemo } from "react";

import Header from "../components/header";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

import { getCompany } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import Router from "next/router";

function Home() {
  useEffect(() => {
    //Router.push("/CompanysStatistics");
    //login("b6447333@gmail.com", "123");
  }, []);
  return (
    <div>
      <link
        rel="shortcut icon"
        href="../assets/favicon.png"
        type="image/x-icon"
      />
      <link rel="stylesheet" href="../assets/css/maicons.css" />
      <link rel="stylesheet" href="../assets/vendor/animate/animate.css" />
      <link
        rel="stylesheet"
        href="../assets/vendor/owl-carousel/css/owl.carousel.min.css"
      />
      <link rel="stylesheet" href="../assets/css/bootstrap.css" />
      <link rel="stylesheet" href="../assets/css/mobster.css" />
      <script src="../assets/js/jquery-3.5.1.min.js"></script>
      <script src="../assets/js/bootstrap.bundle.min.js"></script>
      <script src="../assets/vendor/owl-carousel/js/owl.carousel.min.js"></script>
      <script src="../assets/vendor/wow/wow.min.js"></script>
      <script src="../assets/js/mobster.js"></script>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../assets/favicon-light.png" alt="" width={40} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
              <li className="nav-item dropdown active">
                <a className="nav-link" href="#">
                  الرئيسية
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ourvav">
                  مايميزنا
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#strength">
                  نقاط القوة
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  تواصل معنا
                </a>
              </li>
            </ul>
            <div className="ml-auto my-2 my-lg-0">
              <button style={{display: 'none'}} className="btn btn-primary rounded-pill">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="page-hero-section bg-image hero-home-2"
        style={{ backgroundImage: "url(../assets/img/bg_hero_2.svg)" }}
      >
        <div className="hero-caption">
          <div className="container fg-white h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 wow fadeInUp text-right">
                <div className="badge badge-soft mb-2">
                </div>
                <h1 className="mb-4 fw-normal">من نحن</h1>
                <p className="mb-4">
                مؤسسة حكماء المستقبل للاتصالات وتقنية المعلومات متخصصون في التسويق التجاري والخيري من خلال الوسائل التقنية، وقمنا بإنشاء هذا العمل الوقفي انطلاقاً من مسئوليتنا أمام الدين ثم الوطن ثم المجتمع، وراعينا فيه سياسة تجسير الأدوار وابتعدنا تماماً عن مهمة جمع التبرعات بأي شكل من أشكالها، فنحن فقط منصة إعلان وتنسيق وتسويق خيري نجمع بين أصحاب الحاجات مواطنون أو مقيمون بنظام رسمي داخل الدولة وبين الجمعيات المسجلون رسمياً في الوزارة وبين الشركات الداعمة المصرح لها رسمياً بمزاولة التجارة بأنواعها.
                </p>
                <a href="#" download className="btn btn-dark">
                  حمل الان
                </a>
              </div>
              <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                <div className="img-place mobile-preview shadow floating-animate">
                  <img src="../assets/img/app_showcase.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section no-scroll" id="ourvav">
        <div className="container">
          <h2 className="text-center wow fadeIn">مايميزنا</h2>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-3 py-3 wow fadeInLeft">
                  <div className="card card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                    <i class="fas fa-shield-alt color-iconn"></i>


                    </div>
                    <h5 className="fg-gray">الخصوصية</h5>
                    <p className="fs-small"> الخصوصية الكاملة لأصحاب الحسابات سواء كان مستفيداً أو جمعية أو شركة.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                  <div className="card card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                    <i class="fas fa-print color-iconn"></i>

                    
                    </div>
                    <h5 className="fg-gray">تقارير</h5>
                    <p className="fs-small">
                    تقارير تفصيلية بجميع العمليات التي تتم.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-3 wow fadeInRight">
                  <div className="card card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                    <i class="fas fa-bullseye color-iconn"></i>
                    </div>
                    <h5 className="fg-gray">المرونة</h5>
                    <p className="fs-small">
                    المرونة العالية في اختيار الخدمات والخصائص.
                    </p>
                  </div>
                </div>


                <div className="col-md-6 col-lg-3 py-3 wow fadeInRight">
                  <div className="card card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                    <i class="fas fa-eye color-iconn"></i>
                    </div>
                    <h5 className="fg-gray">الشفافية</h5>
                    <p className="fs-small">
                    الشفافية الكاملة حيث أن موقع ربوة ليست له أي حساب بنكي ولا يتلقى أي تبرعات من أي نوع كان.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section no-scroll" id="strength">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 wow fadeIn">
              <div className="img-place">
                <img src="../assets/img/app_preview_4.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5 pl-lg-5 wow fadeInUp text-right">
              <h2 className="mb-4">صرف سهل للتبرعات</h2>
              <p className="mb-4">سهولة صرف التبرعات للمحتاجين بأبسط الطرق</p>
              <a
                href="#"
                style={{ display: "none" }}
                className="btn btn-outline-primary rounded-pill"
              >
                See Addons
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="row"  style={{textAlign:'right !important'}}>
          <div className="col-lg-6 py-3" dir="rtl" style={{textAlign:'right'}}>
              <h3  style={{textAlign:'right'}}>نقاط القوة:</h3>
              <ul  style={{textAlign:'right',listStyle:'none'}}>
                <li>1. حاجة العمل الخيري إلى منصة تنسيق بين أطرافه الأربعة (الجهات الإشرافية والجمعيات الخيرية والداعمين والمستفيدين).</li>
                <li>2. إتاحة فرصة المشاركة في العمل للخيري لجميع الشركات باختلاف مستوياتها المادية.</li>
                <li>3. الوصول إلى قواعد بيانات أكثر دقة وشمولية وتفصيل.</li>
                <li>4. إمكانية استثمار البيانات الموجودة في بناء خطط عمل ومشاريع تطوير على مستوى المنطقة.</li>
              </ul>

          </div>

          <div className="col-lg-6 py-3" dir="rtl"  style={{textAlign:'right'}}>
              <h3  style={{textAlign:'right'}}>أهدافنا:</h3>
              <ul  style={{textAlign:'right',listStyle:'none'}}>
                <li>1. تحقيق التكامل بين أصحاب المصلحة والجمعيات وبين المتبرعين والمستفيدين.</li>
                <li>2. إيجاد بيئة تنافسية في عمل الخير تحتضن الجميع باختلاف وظائفهم ومستوياتهم.</li>
                <li>3. خدمة المستفيدين بأسلوب يجمع بين الجودة والخصوصية.</li>
                <li>4. المساهمة في تحسين جودة الحياة لجميع أفراد المجتمع بكافة مستوياتهم المعيشية.</li>
              </ul>

          </div>
<div className="col-lg-12 py-3"><hr /> </div>
          <div className="col-lg-12 py-3" dir="rtl"  style={{textAlign:'right'}}>
              <h3  style={{textAlign:'right'}}>أسلوب العمل:</h3>
              <ul  style={{textAlign:'right',listStyle:'none'}}>
                <li>1. منصة تفاعلية تجمع بين السهولة والسرعة في تقديم الخدمات.</li>
                <li>2. تنسيق بين الشركات التي ترغب في الدعم وبين الجمعيات التي لديها مستفيدين.</li>
                <li>3. لا يتم استقبال التبرعات من أي نوع كان مادي أو عيني.</li>
                <li>4. جميع قواعد بيانات تخضع للأنظمة الرسمية.</li>
              </ul>

          </div>

          </div>
          </div>
          </div>

      <div className="page-section" style={{display: "none" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content text-right">
                    <h5>تجربة سهلة وسريعة</h5>
                    <p className="fs-small">
                      سهولة التبرع وسهولة صرف الكوبونات سهولة التبرع وسهولة صرف
                      الكوبونات سهولة التبرع وسهولة صرف الكوبونات سهولة التبرع
                      وسهولة صرف الكوبونات سهولة التبرع وسهولة صرف الكوبونات
                      سهولة التبرع وسهولة صرف الكوبونات
                    </p>
                  </div>
                  <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                    <span className="mai-analytics" />
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>صرف امن للتبرعات</h5>
                    <p className="fs-small">
                      صرف سهل للتبرعات من قبل المحتاج صرف سهل للتبرعات من قبل
                      المحتاج صرف سهل للتبرعات من قبل المحتاج صرف سهل للتبرعات
                      من قبل المحتاج
                    </p>
                  </div>
                  <div className="iconic-md iconic-text bg-info fg-white rounded-circle">
                    <span className="mai-shield-checkmark" />
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>تقارير بتبرعاتك</h5>
                    <p className="fs-small">
                      توفير تقارير لتبرعاتك توفير تقارير لتبرعاتك توفير تقارير
                      لتبرعاتك توفير تقارير لتبرعاتك
                    </p>
                  </div>
                  <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                    <span className="mai-desktop-outline" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="img-place mobile-preview shadow">
                <img src="../assets/img/app_preview_2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 py-3">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>سرعة توصيل التبرعات</h5>
                    <p className="fs-small">
                      سرعة توصيل التبرعات سرعة توصيل التبرعاتسرعة توصيل
                      التبرعاتسرعة توصيل التبرعاتسرعة توصيل التبرعاتسرعة توصيل
                      التبرعاتسرعة توصيل التبرعاتسرعة توصيل التبرعات
                    </p>
                  </div>
                  <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                    <span className="mai-speedometer-outline" />
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>امن تماما</h5>
                    <p className="fs-small">
                      تجربة امنة في التبرع وصرف التبرعاتتجربة امنة في التبرع
                      وصرف التبرعاتتجربة امنة في التبرع وصرف التبرعاتتجربة امنة
                      في التبرع وصرف التبرعاتتجربة امنة في التبرع وصرف التبرعات
                    </p>
                  </div>
                  <div className="iconic-md iconic-text bg-success fg-white rounded-circle">
                    <span className="mai-aperture" />
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h5>متابعة اداء التبرعات</h5>
                    <p className="fs-small">
                      متابعة اداء التبرعات بكل سهولة متابعة اداء التبرعات بكل
                      سهولة متابعة اداء التبرعات بكل سهولة متابعة اداء التبرعات
                      بكل سهولة متابعة اداء التبرعات بكل سهولة{" "}
                    </p>
                  </div>
                  <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                    <span className="mai-stats-chart-outline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="page-section" style={{ display: "none" }}>
        <div className="container">
          <div className="row justify-content-center text-center wow fadeInUp">
            <div className="col-lg-6">
              <h2 className="mb-3">
                Get awesome features, without extra charges
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores non magnam, quis aliquid dolor magni
              </p>
              <div
                className="btn-group btn-group-toggle rounded-pill btn-switch"
                data-toggle="buttons"
              >
                <label className="btn active">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    defaultChecked
                  />{" "}
                  Monthly
                </label>
                <label className="btn">
                  <input type="radio" name="options" id="option2" /> Annually
                </label>
              </div>
            </div>
          </div>
          <div className="pricing-table mt-5 wow fadeInUp">
            <div className="pricing-item active no-transform">
              <div className="pricing-header">
                <h5>Business Plan</h5>
                <h1 className="fw-normal">$49.00</h1>
              </div>
              <div className="pricing-body">
                <ul className="theme-list">
                  <li className="list-item">Push Notification</li>
                  <li className="list-item">Unlimited Bandwith</li>
                  <li className="list-item">Realtime Database</li>
                  <li className="list-item">Monthly Backup</li>
                  <li className="list-item">24/7 Support</li>
                </ul>
              </div>
              <button className="btn btn-dark">Choose Plan</button>
            </div>
            <div className="pricing-item">
              <div className="pricing-header">
                <h5>Starter Plan</h5>
                <h1 className="fw-normal">$24.00</h1>
              </div>
              <div className="pricing-body">
                <ul className="theme-list">
                  <li className="list-item">Push Notification</li>
                  <li className="list-item">Unlimited Bandwith</li>
                  <li className="list-item">Realtime Database</li>
                  <li className="list-item">Monthly Backup</li>
                  <li className="list-item">24/7 Support</li>
                </ul>
              </div>
              <button className="btn btn-dark">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="page-section bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 py-3 wow fadeInUp">
              <h2 className="mb-4">الأسئلة الشائعة </h2>
              <p>هنا نجاوب على الأسئلة الشائعة.</p>
              <p className="fg-primary fw-medium">تريد المزيد من المساعدة?</p>
              <a
                href="#"
                className="btn btn-gradient btn-split-icon rounded-pill"
              >
                <span className="icon mai-call-outline" /> تواصل معنا
              </a>
            </div>
            <div className="col-lg-7 py-3 no-scroll-x">
              <div className="accordion accordion-gap" id="accordionFAQ">
                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingFour">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                     1. هل (منصة ربوة) جمعية خيرية؟
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>1. (منصة ربوة) مشروع وقفي يتبع لمؤسسة تجارية اسمها (مؤسسة حكماء المستقبل للاتصالات وتقنية المعلومات) ومقرها المملكة العربية السعودية – جدة.</p>
                        
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     2. هل (منصة ربوة) تعمل على مستوى محلي أم دولي؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      2. (منصة ربوة) تقدم خدماتها بإشراف الجهات الرسمية داخل كل دولة يتم قبولها فيه.
                      </p>
                     
                    </div>
                  </div>
                </div>


                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     3. من هم المستفيدون من منصة ربوة؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      3. المستفيدون هم جميع أصحاب الحاجات بأنواعها.
                      </p>
                     
                    </div>
                  </div>
                </div>


                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     4. ما دور الشركات التجارية؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      4. يتم التنسيق مع الشركات الراغبة في دعم المحتاجين من خلال (منصة ربوة) لتقديم بطاقات خصم أو بطاقات شراء مجانية للمستفيدين.
                      </p>
                     
                    </div>
                  </div>
                </div>


                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     5. ما دور الجمعيات الخيرية؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      5. تقوم الجمعيات الخيرية بدور البحث للتحقق من صحة بيانات أصحاب الحاجات المسجلين في ربوة.
                      </p>
                     
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingNine">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      6. ماذا تستفيد الجمعيات؟
                    </button>
                  </div>
                  <div
                    id="collapse6"
                    className="collapse"
                    aria-labelledby="headingNine"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      6. (منصة ربوة) يوفر شريحة واسعة من الشركات التجارية الراغبة في دعم المحتاجين إما بكوبونات شرائية مجانية أو كوبونات خصم وتوفر أنواع متعددة من الخيارات والخدمات للمحتاجين المسجلين لديهم.
                      </p>
                    </div>
                  </div>
                </div>














                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     7. ماذا تستفيد الشركات؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      7. (منصة ربوة) يوفر للشركات فرص الوصول السريع إلى المحتاجين الفعليين ويتيح لها التبرع الآمن لهم ويسمح للشركة بتقديم المتوفر لديها من منتجات حسب إمكانيات الشركة مهما كان حجمها ومستواها، ويسهل لهم طريقة التبرع إما بالمنح الكامل أو الخصم.                      </p>
                     
                    </div>
                  </div>
                </div>





                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     8. هل تحصل الجمعيات والشركات على تقارير خاصة بهم.
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      8. نعم ومن خلال لوحة تحكم خاصة يمكن للجمعية أو الشركة الحصول على تقارير تفصيلية ومشاركتها مع الجهات الرسمية للدلالة على إنجازاتهم بشكل متميز.
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     9. ما هي شروط التسجيل في المنصة؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                    <p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:19px;font-family:"Sakkal Majalla";color:#0033CC;'>- شروط التسجيل للمستفيدين:</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>1. أن يكون لدى المستفيد إثبات هوية رسمية أو إقامة سارية المفعول.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>2. أن يكون مستحقاً للمساعدة.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>&nbsp;</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:19px;font-family:"Sakkal Majalla";color:#0033CC;'>- شروط التسجيل للشركات:</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>1. أن يكون لديها نظام محاسبي الكتروني من أي نوع كان، أو منصة الكترونية.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>&nbsp;</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:19px;font-family:"Sakkal Majalla";color:#0033CC;'>- شروط التسجيل لسفراء المنصة (أفراد) أو (جمعيات):</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Sakkal Majalla";color:green;'>للجمعيات:</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>1. أن تكون الجمعية مسجلة رسمياً في الوزارة بتصريح ساري المفعول.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>2. أن تكون الجمعية متخصصة في مجال العمل الإغاثي.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>&nbsp;</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Sakkal Majalla";color:green;'>للأفراد:</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>1. أن يكون للفرد إثبات هوية رسمية أو إقامة سارية المفعول.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>2. الحصول على تفويض رسمي من جمعية خيرية مسجلة رسمياً.</span></p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     10. هل تستقبل (منصة ربوة) تبرعات مادية أو عينية؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      10. لا تستقبل (منصة ربوة) أي تبرعات من أي نوع كان ولا تمتلك حساباً بنكياً خاص بها وإنما يقتصر دورها على تجسير الأدوار بين المحتاجين والجمعيات والشركات.
                      </p>
                     
                    </div>
                  </div>
                </div>




                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     11. ما مصير البيانات التي يتم تسجيلها سواء للمستفيد أو للجمعية أو للشركة.
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      11. تضمن (منصة ربوة) سرية البيانات المسجلة لجميع أنواع الحسابات
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     12. هل يمكن للشركة أو الجمعية الاحتفاظ بنسخة من البيانات الخاصة بها؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      12. نعم يمكن للشركة وكذلك الجمعية الاحتفاظ بنسخة من البيانات الخاصة بها.
                      </p>
                     
                    </div>
                  </div>
                </div>




                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                    13. ما هي طريقة البحث والتأكد من صحة حالة المستفيد وهل هو محتاج فعلاً أو لا؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      13. من يقوم بدور الباحث في (منصة ربوة) هم الجمعيات أو الباحثون المتطوعون من جهات رسمية وهم متمرسون على هذا العمل إضافة إلى أننا في (منصة ربوة) نوفر لهم نماذج الكترونية للتحقق والتأكد من صحة البيانات المسجلة من جهة المستفيد – المحتاج - مع تصنيف مستوى ونوع الاحتياج.
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     14. ما هي طريقة التسجيل في المنصة؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                    <p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:19px;font-family:"Sakkal Majalla";color:#0033CC;'>- للمستفيد:</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>1. بعد قراءتك لشروط الانضمام لمنصة ربوة كمستفيد قم باختيار (إنشاء حساب جديد).</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>2. سيتم دراسة طلب انضمامك للمنصة كمستفيد من التبرعات والخصومات والرد عليك برسالة&nbsp;</span><span dir="LTR" style='font-family:"Sakkal Majalla";'>SMS</span><span style='font-family:"Sakkal Majalla";'>.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>3. سيتم دراسة حالتك من قبل الباحث المختص.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>5. في حالة قبولك سيمكنك الدخول من خلال رقم الجوال وسيتم إرسال رمز الدخول أيضاً من خلال رسالة&nbsp;</span><span dir="LTR" style='font-family:"Sakkal Majalla";'>SMS</span><span style='font-family:"Sakkal Majalla";'>.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>6. قم باختيار الخدمات التي تحتاجها.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>7. ستقوم إدارة المنصة بإيصال طلبك إلى الشركات المسجلة لديها.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>8. في حال رغبة إحدى الشركات بتلبية احتياجاتك سيتم إرسال رسالة إليك تفيدك بالاحتياجات التي تم تأمينها مع عناوين الشركة.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>9. يمكنك بعدها الذهاب إلى فروع الشركة المعتمدة لشراء طلبك بنسبة خصم أو الحصول عليه مجاناً.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>10. يجدر الإشارة إلى أن منصة ربوة تقدم خدماتها مجاناً ولا يوجد لها أي حساب بنكي لاستقبال أي نوع من التبرعات.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>&nbsp;</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>&nbsp;</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:19px;font-family:"Sakkal Majalla";color:#0033CC;'>- للشركات:</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>1. بعد قراءتك لشروط الانضمام لمنصة ربوة كشريك قم باختيار إنشاء حساب جديد.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>2. سيتم التواصل معكم من قبل مندوب المنصة لاستكمال باقي الإجراءات والتنسيقات.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>3. يجدر الإشارة إلى أن منصة ربوة تقدم خدماتها مجاناً ولا يوجد لها أي حساب بنكي لاستقبال أي نوع من التبرعات.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>&nbsp;</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:19px;font-family:"Sakkal Majalla";color:#0033CC;'>- لسفراء المنصة (أفراد) أو (جمعيات):</span></strong></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>1. بعد قراءتك لشروط الانضمام لمنصة ربوة كسفير قم باختيار إنشاء حساب جديد.</span></p>
<p dir="RTL" style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;text-align:right;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Sakkal Majalla";'>2. سيتم التواصل معكم من قبل مندوب المنصة لاستكمال باقي الإجراءات والتنسيقات.</span></p>
<p><span dir="RTL" style='font-size:15px;line-height:107%;font-family:"Sakkal Majalla";'>3. يجدر الإشارة إلى أن منصة ربوة تقدم خدماتها مجاناً ولا يوجد لها أي حساب بنكي لاستقبال أي نوع من التبرعات.</span></p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     15. ما نوع الخدمات التي يمكن للمستفيد أن يحصل عليها؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      15. جميع أنواع الخدمات الإعاشية والصحية والسكنية وغيرها لكن ذلك يعتمد على عدد ونوع الشركات المسجلة في (منصة ربوة).
                      </p>
                     
                    </div>
                  </div>
                </div>




                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     16. متى يمكن للمستفيد الحصول على التبرع المقرر له من الشركات؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      16. بعد اعتماد المستفيد في (منصة ربوة) ستقوم إدارة المنصة بالبحث عن الشركات الراغبة في دعمه وفي حال الوصول إلى الشركة المناسبة ستصل رسالة إلى جوال المستفيد SMS تفيده بأن لديه بطاقة خصم أو بطاقة شراء مجاني مع توضيح عنوان الشركات التي تسمح لها بصرف البطاقة لديها.
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     17. ما هي آلية الاستفادة من بطاقة الخصم أو بطاقة الشراء المجانية؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      17. بعد وصول الرسالة التي تفيد بتوفر البطاقة في حساب المستفيد يقوم المستفيد بالدخول على حسابه في تطبيق الجوال الخاصة بـ (منصة ربوة) ثم شاشة البطاقات وعند وصوله إلى البائع يقوم بعرضها عليه وسوف يقوم البائع بتسجيل رقم البطاقة ومنح المستفيد المشتريات بالخصم المقرر أو مجاناً (حسب نوع البطاقة).
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     18. هل يلزم المستفيد أن يقوم بتحميل تطبيق (منصة ربوة) من متجر التطبيقات؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      18. هناك خياران لصرف الكوبونات، إما بعرضها من خلال تطبيق الجوال أو من خلال رقم الكوبون المرسل عبر رسائل الـ SMS إلى جوال المستفيد.
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     19. ماذا لو قام المستخدم سواء كان مستفيد أو شركة أو جمعية أو سفير بتغيير رقم جواله فهل سيتمكن من الدخول بالرقم الجديد؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      19. لا بد أولاً من الدخول بالرقم القديم ثم اختيار تغيير رقم الجوال وبعد ذلك سيتم اعتماد الرقم الجديد وإلغاء السابق.
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     20. هل هناك تاريخ انتهاء لصلاحية البطاقة المرسلة للمستفيد؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      20. نعم لكل بطاقة تاريخ صلاحية وسيتم إعلام المستفيد بقرب انتهاء الصلاحية قبل التاريخ بأسبوع، وفي حال انتهت صلاحية البطاقة قبل الصرف فسيتم تحويل البطاقة لمستفيد آخر.
                      </p>
                     
                    </div>
                  </div>
                </div>



                <div className="accordion-item wow fadeInRight">
                  <div className="accordion-trigger" id="headingEight">
                    <button
                      className="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     21. إذا كنتُ من أصحاب الحاجات ولم تسجيلي في أي جمعية فهل ممكن أستفيد من (منصة ربوة)؟
                    </button>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>
                      21. نعم يمكنك ذلك من خلال التسجيل في (منصة ربوة) بعد استيفاءك للشروط الخاصة بالمستفيدين.
                      </p>
                     
                    </div>
                  </div>
                </div>



               





























              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeIn">
            <h2 className="mb-4">Our partners</h2>
            <p>
              Become a <a href="#">partners?</a>
            </p>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center mt-5">
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/alter_sport.png" alt="" />
              </div>
            </div>
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/cleaning_service.png" alt="" />
              </div>
            </div>
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/creative_photo.png" alt="" />
              </div>
            </div>
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/global_tv.png" alt="" />
              </div>
            </div>
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/net_sport_tv.png" alt="" />
              </div>
            </div>
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/news_digital_tv.png" alt="" />
              </div>
            </div>
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/spa_beauty.png" alt="" />
              </div>
            </div>
            <div className="p-3 wow zoomIn">
              <div className="img-place client-img">
                <img src="../assets/img/clients/trivier_group.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-footer-section bg-dark fg-white">
        <div className="container mb-5">
          <div className="row justify-content-center text-center wow fadeInUp">
            <div className="col-lg-8">
              <div className="text-center mb-3">
                <img src="../assets/favicon-light.png" alt="" height={80} />
              </div>
            </div>
          </div>
        </div>
        <div className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 my-3 wow fadeInUp">
                <div
                  className="card-page text-right"
                  style={{ textAlign: "right" }}
                >
                  <div className="row row-beam-md">
                    <div className="col-md-4 text-center py-3 py-md-2">
                      <i className="mai-location-outline h3" />
                      <p className="fg-primary fw-medium fs-vlarge">Location</p>
                      <p className="mb-0">
                        3 East Ridgewood Avenue Los Angeles, CA 90022
                      </p>
                    </div>
                    <div className="col-md-4 text-center py-3 py-md-2">
                      <i className="mai-call-outline h3" />
                      <p className="fg-primary fw-medium fs-vlarge">Contact</p>
                      <p className="mb-1">+213 908 92034</p>
                      <p className="mb-0">+415 123 89245</p>
                    </div>
                    <div className="col-md-4 text-center py-3 py-md-2">
                      <i className="mai-mail-open-outline h3" />
                      <p className="fg-primary fw-medium fs-vlarge">Email</p>
                      <p className="mb-1">support@mobster.com</p>
                      <p className="mb-0">support@macodeid.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 my-3 wow fadeInUp">
                <div className="card-page" style={{ textAlign: "right",display: "none" }}>
                  <h3 className="fw-normal">تواصل معنا</h3>
                  <form method="POST" className="mt-3">
                    <div className="form-group">
                      <label htmlFor="name" className="fw-medium fg-grey">
                        الإسم
                      </label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="fw-medium fg-grey">
                        الإيميل
                      </label>
                      <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="fw-medium fg-grey">
                        رقم الجوال
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="fw-medium fg-grey">
                        الرسالة
                      </label>
                      <textarea
                        rows={6}
                        className="form-control"
                        id="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <button type="submit" className="btn btn-primary">
                        أرسل الرسالة
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Home;
