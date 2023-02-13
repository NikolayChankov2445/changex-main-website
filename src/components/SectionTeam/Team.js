import * as React from "react";
import { Avatar } from "rsuite";

import LinkedinLogo from "../../../static/assets/images/social/linkedIn.svg";
import styled from "styled-components";

import Card from "@mui/material/Card";
import {CardActions, CardHeader, Collapse} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandableItem from "../Common/ExpandableItem";

const TypographyTitle = styled(Typography)`
    font-weight: 600 !important;
    font-family: var(--font-header) !important;
    font-size: 22px !important;
`

const TypographySubTItle = styled(Typography)`
    background-color: #8366F4;
    font-family: var(--font-paragraph) !important;
    border-radius: 5rem;
    margin-top: 1rem;
    padding: 5px 10px ;
    width: fit-content;
    color: #ffffff
`

const ImageMore = styled('img')`
    font-size: 25px;
    color: #f5f5fa;
    border: none;
    '&:hover': {
        outline: none;
    };
    '&:focus': {
        outline: none;
    };
`


export default function Team({ titleObj, teamData }) {

    return (
        <div id="changex_team">
            <div className="padding-global">
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
                    <div className="w-layout-grid grid-3">
                        {teamData.map((item, index) => {
                            return (
                                <ExpandableItem
                                    key={index}
                                    className="margin-large"
                                    render={(props) => (
                                        <>
                                            <Card
                                                className={`${
                                                    props.open ? "" : "max-height-card"
                                                } aboutCardWrapper`}
                                            >
                                                <CardHeader
                                                    className="card-header"
                                                    avatar={
                                                        <Avatar className="teamAvatar" aria-label="avatar">
                                                            <img alt={item.name} src={item.src} />
                                                        </Avatar>
                                                    }
                                                    title={<TypographyTitle>{item.name}</TypographyTitle>}
                                                    titleTypographyProps={{variant:'h5'}}

                                                    subheader={<TypographySubTItle className={`${item.role ? '' : 'hide'} card-role`}>{item.role}</TypographySubTItle>}
                                                />
                                                <CardContent className={`${item.role ? 'cardContent' : 'cardBoard'}`}>
                                                    <Typography
                                                        variant="body2"
                                                        className={`${
                                                            !props.open && item.showMore
                                                                ? "cardContentTxt"
                                                                : ""
                                                        } font-paragraph`}
                                                    >
                                                        {item.about}
                                                    </Typography>
                                                    <Typography variant="body2" className="text-align-center font-paragraph">
                                                        <Collapse
                                                            in={props.open === true}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            <p className="text-align-left">
                                                                {item.about2}
                                                            </p>
                                                        </Collapse>
                                                        {props.open ? (
                                                            <RemoveIcon
                                                                className={`${
                                                                    item.showMore ? "" : "hide"
                                                                } showMoreBtn`}
                                                                onClick={() => props.setOpen(!props.open)}
                                                            ></RemoveIcon>
                                                        ) : (
                                                            <ImageMore
                                                                src={'/assets/images/social/show_more.svg'}
                                                                className={`${
                                                                    item.showMore ? "" : "hide"
                                                                }`}
                                                                onClick={() => props.setOpen(!props.open)}
                                                            ></ImageMore>
                                                        )}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={item.social}
                                                        className="button social-link w-inline-block button-lime"
                                                    >
                                                        <img
                                                            src={LinkedinLogo}
                                                            alt="changex linkedin"
                                                            loading="lazy"
                                                        ></img>
                                                    </a>
                                                </CardActions>
                                            </Card>
                                        </>
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
