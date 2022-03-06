/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import "./ArenaBadge.css";
import { badges } from "./staticData";

export default ({ name, colour, template, icon, text, badgeClick, size }) => {
  // console.log(template);
  const ArenaBadge = styled.div`
    svg {
      fill: transparent;
      stroke-width: 5px;
      stroke: ${colour ? colour : "#ccc"};
    }

    path {
      fill: transparent;
      stroke: ${colour ? colour : "#ccc"};
    }

    polygon {
      fill: transparent;
      stroke: ${colour ? colour : "#ccc"};
    }

    text {
      fill: currentColor;
      text-anchor: middle;
    }

    background-image: url(${icon
      ? require("../../assets/badges/" + icon + ".svg").default
      : ""});
    background-repeat: no-repeat;
    background-position: center;
  `;

  let bhtml = badges.filter((b) => b.name === template)[0].svg;

  return (
    <>
      <div
        className={"arena-badge arena-badge-" + size}
        id={name}
        onClick={badgeClick}
      >
        <ArenaBadge dangerouslySetInnerHTML={{ __html: bhtml }}></ArenaBadge>
        <div className="textcurve">
          <svg viewBox="0 0 150 140">
            <path id="curve" d="M0,0 A37, 37 1 1,0 145,0" />
            <text>
              <textPath xlinkHref="#curve" startOffset="50%">
                {text}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};
