import React from "react";

import Carousel from "react-elastic-carousel";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const News = () => {
  return (
    <div className="news-container">
      <Container>
        <h4 className="news text-light text-center pb-5 pt-5">News & Events</h4>
        <Carousel breakPoints={breakPoints} itemPadding={[10, 10]}>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
            <div className="modal" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
          <Card className="bg-orange text-light text-center p-3">
            <p className="mt-2 ml-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </Card>
        </Carousel>
      </Container>
    </div>
  );
};

export default News;
