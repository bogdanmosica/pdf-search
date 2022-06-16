import React, { useState } from "react";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { searchPlugin } from "@react-pdf-viewer/search";

import SearchSidebar from "./SearchSideBar";

const HomePage = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	const searchPluginInstance = searchPlugin();

	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.js">
			<div
				style={{
					border: "1px solid rgba(0, 0, 0, .3)",
					display: "flex",
					height: "100%",
					width: "100%",
				}}>
				<div
					style={{
						borderRight: "1px solid rgba(0, 0, 0, .2)",
						flex: "0 0 15rem",
						width: "15rem",
					}}>
					<SearchSidebar searchPluginInstance={searchPluginInstance} />
				</div>

				<div style={{ flex: 1 }}>
					<Viewer
						fileUrl="/pdf-open-parameters.pdf"
						plugins={[searchPluginInstance]}
						defaultScale={3}
					/>
				</div>
			</div>
		</Worker>
	);
};

export default HomePage;
