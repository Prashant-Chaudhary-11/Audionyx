import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Premium = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    const plans = [
        {
            name: "Family",
            desc: "6 premium account, cancel anytime",
            monthlyPrice: "INR800.00",
            yearlyPrice: "INR8000.00",
            btnColor: "custom-btn",
            features: [
                "6 Premium accounts",
                "Ad-free music",
                "High-quality audio",
                "Offline downloads",
                "Cancel anytime",
            ],
        },
        {
            name: "Individual",
            desc: "1 premium account, cancel anytime",
            monthlyPrice: "INR540.00",
            yearlyPrice: "INR5400.00",
            btnColor: "custom-btn-purple",
            features: [
                "1 Premium account",
                "Ad-free listening",
                "Unlimited skips",
                "High-quality streaming",
                "Cancel anytime",
            ],
        },
        {
            name: "Student",
            desc: "1 premium account, cancel anytime",
            monthlyPrice: "INR240.00",
            yearlyPrice: "INR2400.00",
            btnColor: "custom-btn",
            features: [
                "Discounted price",
                "Ad-free experience",
                "1 Premium account",
                "Unlimited skips",
                "Cancel anytime",
            ],
        },
    ];

    const handleCycleChange = (cycle) => {
        setBillingCycle(cycle);
    };

    return (
        <div className="plan_page text-center py-5">
            <div className="container">
                {/* Heading */}
                <h2
                    className="fw-bold mb-5 premium_heading"
                    data-aos="fade-up"
                >
                    A transformative <br /> speaking subscription!
                </h2>

                {/* Toggle */}
                <div className="mb-5" data-aos="zoom-in">
                    <div className="toggle-container">
                        <div className={`slider ${billingCycle}`}></div>
                        <button
                            className={`toggleBtn ${billingCycle === "monthly" ? "active" : ""}`}
                            onClick={() => handleCycleChange("monthly")}
                        >
                            Monthly
                        </button>
                        <button
                            className={`toggleBtn ${billingCycle === "yearly" ? "active" : ""}`}
                            onClick={() => handleCycleChange("yearly")}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Plans */}
                <div className="row m-0 justify-content-center">
                    {plans.map((plan, index) => (
                        <div
                            className="col-md-4 mb-5"
                            key={index}
                            data-aos="flip-left"
                            data-aos-delay={index * 200} // staggered animations
                        >
                            <div className="flip-card mx-3">
                                <div className="flip-card-inner">
                                    {/* Front Side */}
                                    <div
                                        className={`flip-card-front premium_card_${index} card plan-card border-0`}
                                    >
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <div className="text-start">
                                                <span className="badge rounded-pill premium-badge mb-3">
                                                    PREMIUM
                                                </span>
                                                <h3 className="fw-bold">{plan.name}</h3>
                                                <p>{plan.desc}</p>
                                            </div>
                                            <div>
                                                <div
                                                    className="mb-3 d-flex align-items-center"
                                                    data-aos="fade-up"
                                                    data-aos-duration="600"
                                                    key={billingCycle} // triggers re-animation on toggle
                                                >
                                                    <h2 className="fw-bold m-0">
                                                        {billingCycle === "monthly"
                                                            ? plan.monthlyPrice
                                                            : plan.yearlyPrice}
                                                    </h2>
                                                    <span className="fs-6">/{billingCycle}</span>
                                                </div>
                                                <span className="position-absolute bottom-0 end-0 premium_circle p-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="lni lni-arrow-angular-top-right"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div
                                        className={`flip-card-back premium_card_${index} card plan-card border-0`}
                                    >
                                        <div className="card-body text-start">
                                            <h5 className="fw-bold mb-3">Features</h5>
                                            <ul className="list-unstyled">
                                                {plan.features.map((feature, i) => (
                                                    <li className="mb-2" key={i}>
                                                        <svg
                                                            className="me-2"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 25 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M21.25 4.00001C21.25 3.77689 21.1507 3.56536 20.979 3.42287C20.8073 3.28039 20.5811 3.22173 20.3618 3.26285L8.36178 5.51285C8.00705 5.57936 7.75 5.88909 7.75 6.25001V9.98484C7.74982 9.99437 7.74982 10.0039 7.75 10.0135V14.4585C7.20497 14.1636 6.55664 14 5.875 14C5.00075 14 4.18131 14.2691 3.56431 14.7392C2.9467 15.2098 2.5 15.9138 2.5 16.75C2.5 17.5862 2.9467 18.2902 3.56431 18.7608C4.18131 19.2309 5.00075 19.5 5.875 19.5C6.74925 19.5 7.56869 19.2309 8.18569 18.7608C8.79111 18.2995 9.2323 17.6139 9.24948 16.7993C9.24983 16.79 9.25 16.7806 9.25 16.7712V10.62L19.75 8.60938V12.2085C19.205 11.9136 18.5566 11.75 17.875 11.75C17.0008 11.75 16.1813 12.0191 15.5643 12.4892C14.9467 12.9598 14.5 13.6638 14.5 14.5C14.5 15.3362 14.9467 16.0402 15.5643 16.5108C16.1813 16.9809 17.0008 17.25 17.875 17.25C18.7492 17.25 19.5687 16.9809 20.1857 16.5108C20.7911 16.0495 21.2323 15.3639 21.2495 14.5493C21.2498 14.54 21.25 14.5306 21.25 14.5212V4.00001Z"
                                                                fill="#343C54"
                                                            />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <span className="position-absolute bottom-0 end-0 premium_circle p-3 rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="lni lni-arrow-angular-top-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="premium_listing text-center">
                <h2 className="homePageHeading mb-5">
                    Join the <span>World’s Biggest Music Community</span>
                </h2>

                <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">

                    <div className="stats-item" data-aos="fade-up">
                        <h3 className="stat-number">5000+</h3>
                        <p className="stat-label">Artists</p>
                    </div>

                    <div className="stats-item" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="stat-number">1M+</h3>
                        <p className="stat-label">Songs</p>
                    </div>

                    <div className="stats-item" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="stat-number">100+</h3>
                        <p className="stat-label">Partners</p>
                    </div>

                    <div className="stats-item" data-aos="fade-up" data-aos-delay="600">
                        <h3 className="stat-number">50M+</h3>
                        <p className="stat-label">Listeners</p>
                    </div>

                </div>
            </div>
            <div className="cta-section d-flex align-items-center justify-content-between my-5 rounded-4" data-aos="fade-up" data-aos-delay="600">
                {/* Left side: image */}
                <div className="cta-image premium_img" data-aos="fade-right" data-aos-delay="700">
                    <img src="discover_2.jpg" alt="Team working on music" className="img-fluid rounded" />
                </div>

                {/* Right side: text */}
                <div className="cta-content text-start px-4" data-aos="fade-left" data-aos-delay="800">
                    <h2 className="cta-title">
                        Ready to take your music experience to the next level?
                    </h2>
                    <p className="cta-text">
                        Join our platform today and unlock unlimited songs, playlists, and artists.
                        Start streaming now and be part of the 50M+ listeners community!
                    </p>
                    <button className="custom-btn mt-3">Get Started</button>
                </div>
            </div>

        </div>
    );
};
