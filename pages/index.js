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
                      طرق التبرع
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionFAQ"
                  >
                    <div className="accordion-content">
                      <p>طرق التبرع:</p>
                      <ul>
                        <li>Wire transfers</li>
                        <li>Bank transfers</li>
                        <li>Western Union</li>
                        <li>Moneygram</li>
                        <li>Virtual credit cards (VCC)</li>
                        <li>Health savings account (HSA)</li>
                        <li>Any escrow type of payment</li>
                        <li>Prepaid cards if you use automatic payments</li>
                      </ul>
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
                      طرق صرف التبرعات
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
                        This feature is only available in the US. For the US
                        territories, this is supported only if the debit card
                        was issued under a US-licensed bank. If you'd like to
                        know in advance whether your payment to or from a US
                        territory will go through, please check with your card
                        issuing bank.
                      </p>
                      <p>
                        You can use Google Pay to send money to friends and
                        family or to someone using their email address or phone
                        number. Google Pay charges no fees.
                      </p>
                      <p>
                        If you have a problem sending money, here is a list of
                        likely reasons.
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
                      كيف يتم التسجيل كمستفيد
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
                        For the best Google Pay experience, we recommend using a
                        debit card whenever you send or receive money from
                        friends and family. With a debit card, sending and
                        receiving money is usually the fastest option.
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
