import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";
import { Document, Page, pdfjs } from "react-pdf";
import { Modal } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import docIcon from "../assets/icons/documents-dash.png";
import document1 from "../assets/documents/1mcdpu.pdf";
import document2 from "../assets/documents/1mcs.pdf";
import document3 from "../assets/documents/1mcspu.pdf";
import document4 from "../assets/documents/1mcl.pdf";
import document5 from "../assets/documents/1mclpu.pdf";
import document6 from "../assets/documents/1mcd.pdf";
import document7 from "../assets/documents/3-5Shooting.pdf";
import document8 from "../assets/documents/3-Point-Contest.pdf";
import document9 from "../assets/documents/4-Minute-Mid-Range-Shooting.pdf";
import document10 from "../assets/documents/4-Minute-Perimeter-Shooting.pdf";
import document11 from "../assets/documents/7Drill-Against-the-Grain-Pull-Ups.pdf";
import document12 from "../assets/documents/7-Drill-Mid-Range.pdf";
import document13 from "../assets/documents/7-Drill-Perimeter.pdf";
import document14 from "../assets/documents/7-Drill-With-the-Grain-Pull-Ups.pdf";
import document15 from "../assets/documents/50-Makes1Miss-Mid-Range.pdf";
import document16 from "../assets/documents/50-Makes1Miss-Perimeter.pdf";
import document17 from "../assets/documents/99-Shooting.pdf";
import document18 from "../assets/documents/Against-the-Grain-Pull-Ups.pdf";
import document19 from "../assets/documents/Beat-the-Pro-Mid-Range.pdf";
import document20 from "../assets/documents/Beat-the-Pro-Perimeter.pdf";
import document21 from "../assets/documents/Catch-45-Shooting.pdf";
import document22 from "../assets/documents/Celtic-50-Shooting.pdf";
import document23 from "../assets/documents/Corner-7-Shooting.pdf";
import document24 from "../assets/documents/Mullin-Shooting-Ladder.pdf";
import document25 from "../assets/documents/Round-of-Threes.pdf";
import document26 from "../assets/documents/Star-Shooting.pdf";
import document27 from "../assets/documents/Swish-Shooting-Warm-Up.pdf";
import document28 from "../assets/documents/With-the-Grain-Pull-Ups.pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const importedDocs = [
  {
    file: document1,
    id: "document1",
    title: "1 Minute Cont. Drift Pull Ups",
  },
  {
    file: document2,
    id: "document2",
    title: "1 Minute Cont. Shifts",
  },
  {
    file: document3,
    id: "document3",
    title: "1 Minute Cont. Shift Pull ups",
  },
  {
    file: document4,
    id: "document4",
    title: "1 Minute Cont. Lifts",
  },
  {
    file: document5,
    id: "document5",
    title: "1 Minute Cont. Lift Pull ups",
  },
  {
    file: document6,
    id: "document6",
    title: "1 Minute Cont. Drifts",
  },
  {
    file: document7,
    id: "document7",
    title: "3-5 Shooting",
  },
  {
    file: document8,
    id: "document8",
    title: "3-Point Contest",
  },
  {
    file: document9,
    id: "document9",
    title: "4 Minute Mid-Range Shooting",
  },
  {
    file: document10,
    id: "document10",
    title: "4 Minute Perimeter Shooting",
  },
  {
    file: document11,
    id: "document11",
    title: "7 Drill Against the Grain Pull Ups",
  },
  {
    file: document12,
    id: "document12",
    title: "7 Drill Mid-Range",
  },
  {
    file: document13,
    id: "document13",
    title: "7 Drill Perimeter",
  },
  {
    file: document14,
    id: "document14",
    title: "7 Drill With the Grain Pull Ups",
  },
  {
    file: document15,
    id: "document15",
    title: "50 Makes 1 Miss Mid-Range",
  },
  {
    file: document16,
    id: "document16",
    title: "50 Makes 1 Miss Perimeter",
  },
  {
    file: document17,
    id: "document17",
    title: "99 Shooting",
  },
  {
    file: document18,
    id: "document18",
    title: "Against the Grain Pull Ups",
  },
  {
    file: document19,
    id: "document19",
    title: "Beat the Pro Mid-Range",
  },
  {
    file: document20,
    id: "document20",
    title: "Beat the Pro Perimeter",
  },
  {
    file: document21,
    id: "document21",
    title: "Catch 45 Shooting",
  },
  {
    file: document22,
    id: "document22",
    title: "Celtic 50 Shooting",
  },
  {
    file: document23,
    id: "document23",
    title: "Corner 7 Shooting",
  },
  {
    file: document24,
    id: "document24",
    title: "Mullin Shooting Ladder",
  },
  {
    file: document25,
    id: "document25",
    title: "Round of Threes",
  },
  {
    file: document26,
    id: "document26",
    title: "Star Shooting",
  },
  {
    file: document27,
    id: "document27",
    title: "Swish Shooting Warm Up",
  },
  {
    file: document28,
    id: "document28",
    title: "With the Grain Pull Ups",
  },
];

const makeThumbnail = (page) => {
  const vp = page.getViewport({ scale: 1 });
  const canvas = document.createElement("canvas");
  const scalesize = 0.5;
  canvas.width = vp.width * scalesize;
  canvas.height = vp.height * scalesize;
  const scale = Math.min(canvas.width / vp.width, canvas.height / vp.height);
  return page
    .render({
      canvasContext: canvas.getContext("2d"),
      viewport: page.getViewport({ scale: scale }),
    })
    .promise.then(function () {
      return canvas.toDataURL();
    });
};

function Documents() {
  const [showThumbs, setShowThumbs] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [documents, setDocuments] = useState(importedDocs);
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const docs = await Promise.all(
        documents.map((docu) => {
          return pdfjsLib.getDocument(docu.file).promise.then((doc) => {
            return doc
              .getPage(1)
              .then(makeThumbnail)
              .then((image) => ({ ...docu, image }));
          });
        })
      );
      setDocuments(docs);
    })();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="container dashOpacity">
      <div id="upcomingWorkouts" className="card mb-1 mt-1">
        <div className="mt-4">
          <img id="upcomingWorkoutsIcon" src={docIcon} alt="" />
          <h4 className="card-title fs-3">Documents</h4>
          <h6 className="card-subtitle mb-3 text-black-50">
            28 documents in library
          </h6>
          {/*<select
            style={{
              display: "inline-block",
              float: "right",
              marginRight: "20px",
              marginTop: "-60px",
              width: "80px",
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 500,
            }}
            className="form-select cursor-pointer"
            onChange={() => setShowThumbs((prev) => !prev)}
          >
            <option value={true}>Grid</option>
            <option value={false}>List</option>
          </select>*/}
        </div>

        {selectedDoc && (
          <Modal
            show={Boolean(selectedDoc)}
            onHide={() => setSelectedDoc(null)}
          >
            <Document
              file={selectedDoc.file}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Modal>
        )}

        <div className="card-body">
          <div>
            {showThumbs ? (
              <div className="documents-container ">
                {documents.map((doc, i) => (
                  <div
                    onClick={() => setSelectedDoc(doc)}
                    key={i}
                    className="document cursor-pointer"
                    style={{ paddingTop: "10px" }}
                  >
                    <h5
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                      className=""
                    >
                      {doc.title}
                    </h5>
                    <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {showThumbs && doc.image ? (
                        <img style={{}} src={doc.image} />
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {documents.map((doc, i) => (
                  <div className="" key={i}>
                    <button
                      id="dashCancelBtn1"
                      type="button"
                      className="btn dashCancelBtn "
                      style={{
                        marginRight: "-70px",
                        display: "inline",
                      }}
                    >
                      <Link
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        to="#"
                        onClick={() => setSelectedDoc(doc)}
                      >
                        {" "}
                        View{" "}
                      </Link>
                    </button>
                    <h6
                      style={{
                        fontWeight: 500,
                        display: "inline",
                        fontSize: "14px",
                      }}
                    >
                      {doc.title}
                    </h6>
                    <div>
                      <hr className="text-muted" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
