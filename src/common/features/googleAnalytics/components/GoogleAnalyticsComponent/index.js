import Script from "next/script";

const GoogleAnalyticsComponent = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=G-QT6522WDVN"}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QT6522WDVN');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsComponent;
