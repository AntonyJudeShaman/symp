"use client";
import Head from "next/head";

export function Analytics() {
  
  return (
    <>
      <Head>
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="7be73283-20ad-4a52-aa95-6863882c3c3a"
          async
        ></script>
      </Head>
      
    </>
  );
}
