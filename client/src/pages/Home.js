import React, {Suspense} from 'react';
import {pageValues} from 'data/pageValues';
import {Link} from 'react-router-dom';
import ImageLink from './ImageLink';

const paginate = (array, page_size, page_number) => {
  --page_number;
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

const PAGE_SIZE = 8;

const IndexPage = ({match}) => {
  const pageId = match.params.id ? parseInt(match.params.id) : 1;
  const displayValues = paginate(pageValues, PAGE_SIZE, pageId);
  return(
    <div className="main">
      <div className="buttons">
        {pageId >= 2 &&
        <Link to={`/${pageId - 1}`}>
          <div className="button">
            Previous
          </div>
        </Link>}
        {pageValues.length/(pageId*PAGE_SIZE) >= 1 &&
        <Link to={`/${pageId + 1}`}>
          <div className="button">
            Next
          </div>
        </Link>}
      </div>
      <div className="home_wrapper">

        {displayValues.map((value, key)=> (
          <div className="home_image__container" key={key}>
            <div className="home_title">
              {value.text}
            </div>
            <Link to={value.link}>
              <Suspense fallback={<h1>Still Loading…</h1>}>
                <ImageLink
                  imageSrc = {value.imageSrc}
                />
              </Suspense>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;