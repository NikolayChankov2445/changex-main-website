import * as React from "react";
import {Card} from "react-bootstrap";
import { useState } from "react";
import { BsDashCircle } from "react-icons/bs";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  @media only screen and (max-width: 1025px) {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
`

const Wrapper = styled.div`
  display: flex;
  grid-column-gap: 1.5rem;
  grid-row-gap: 3.5rem;
  width: max-content;
`

const HeadarSubHeader = styled.div`
  margin: auto;
`

const TypographyTitles = styled.h3`
  font-weight: 600;
  font-size: large;
  font-family: Lexend, sans-serif;
  margin-bottom: 0.7rem;
`

const TypographyAbout = styled.p`
  height: 150px;
  font-size: 0.9rem;
  font-family: Source Sans Pro, sans-serif;
  @media only screen and (max-width: 600px) {
    height: 175px !important;
  }
`

const TypographyAbout2 = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-family: Source Sans Pro, sans-serif;
`
const TypographySubTitle = styled.div`
  background-color: #8366F4;
  border-radius: 100px;
  padding: 5px 10px;
  width: fit-content;
  &&{
    color: #ffffff !important;
  }
  
`
const AvatarImg = styled.img`
  border-radius: 45px !important;
  width: 90px;
  height: 90px;
`

const Image = styled.img`
  border-radius: 45px !important;
  width: 45px;
  height: 45px;
  &:hover {
    outline: none;
  },
 &:focus {
  outline: none;
}
`

const ImageMore = styled.img`
  font-size: 25px;
  color: blue;
  border: none;
  &:hover {
    outline: none;
  },
  &:focus {
  outline: none;
  }
`

const ExpandableItem = props => {
    const [open, setOpen] = useState(false);
    return props.render({ open, setOpen });
};

export default function Team({ titleObj, teamData, paddingClass }) {
    return (
        <div id="section_team">
            <div className={paddingClass}>
                <div className="container-large ">
                    <h5 className="heading-style-h7 margin-vertical margin-large blue">
                        {titleObj.head2}
                    </h5>
                    <h3 className="heading-style-h3 margin-vertical margin-large">
                        {titleObj.head}
                    </h3>
                    <p className="margin-vertical margin-large">
                        <strong>{titleObj.paragraph}</strong>
                    </p>
                    <Grid>
                        {teamData.map((item, index) => {
                            return (
                                <ExpandableItem
                                    key={index}
                                    className="margin-large"
                                    render={(props) => (
                                        <>
                                            <Card className={`${
                                                props.open ? "" : "max-height-card"
                                            } aboutCardWrapper`}
                                            >
                                                <Card.Body  style={{padding: "24px"}}>
                                                    <Card.Title>
                                                        <Wrapper>
                                                            <AvatarImg
                                                                className="teamAvatar"
                                                                aria-label="avatar"
                                                                alt={item.name} src={item.src} />
                                                            <HeadarSubHeader >
                                                                <TypographyTitles>{item.name}</TypographyTitles>
                                                                <Card.Subtitle>
                                                                    <TypographySubTitle
                                                                        className="mb-2 text-muted">
                                                                        {item.role}
                                                                    </TypographySubTitle>
                                                                </Card.Subtitle>
                                                            </HeadarSubHeader>
                                                        </Wrapper>

                                                    </Card.Title>

                                                    <Card.Text>
                                                        <TypographyAbout
                                                            className={`${
                                                                !props.open && item.showMore
                                                                    ? "cardContentTxt"
                                                                    : ""
                                                            }`}>
                                                            {item.about}
                                                        </TypographyAbout>
                                                        <TypographyAbout2>
                                                            <div
                                                                className={`${props.open === true ? '' : 'hide'}`}>
                                                                <p className="text-align-left">
                                                                    {item.about2}
                                                                </p>
                                                            </div>
                                                            {props.open ? (

                                                                <BsDashCircle
                                                                    size={25}
                                                                    color={'#3418D8'}
                                                                    className={`${
                                                                        item.showMore ? "" : "hide"
                                                                    } showMoreBtn`}
                                                                    onClick={() => props.setOpen(!props.open)}>
                                                                </BsDashCircle>
                                                            ) : (
                                                                <ImageMore
                                                                    src={'/assets/images/social/show_more.svg'}
                                                                    className={`${
                                                                        item.showMore ? "" : "hide"
                                                                    }`}
                                                                    onClick={() => props.setOpen(!props.open)}
                                                                ></ImageMore>
                                                            )}
                                                        </TypographyAbout2>
                                                    </Card.Text>
                                                    <Card.Link
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={item.social}
                                                        className="margin-top-small
                                                        button social-link w-inline-block button-lime"
                                                    >
                                                        <>
                                                            <img
                                                                src={"/assets/images/social/linkedin_lime.svg"}
                                                                alt="changex linkedin"
                                                                loading="lazy"
                                                            ></img>
                                                        </>
                                                    </Card.Link>
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )}
                                />
                            );
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    );
}
