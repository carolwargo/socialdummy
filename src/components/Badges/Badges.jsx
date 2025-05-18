import React from "react";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import classNames from "classnames";
import styles from "./Badges.module.css";
import {
    PiHairDryerFill,
    PiNeedleDuotone,
  } from "react-icons/pi";
  import {
    GiLargePaintBrush,
    GiSyringe,
    GiFootprint,
    GiCrystalEarrings,
  } from "react-icons/gi";
  import { FaHandHoldingWater } from 'react-icons/fa';
  import {  FaSwimmingPool } from "react-icons/fa"; // ✅ Fixed here
  import { TbRazorElectric, TbMassage } from "react-icons/tb";
  import { RiSyringeFill } from "react-icons/ri";
  import { BsSunglasses } from "react-icons/bs";
  import { AiFillSafetyCertificate } from "react-icons/ai";

const badges = [
  {
    icon: <TbRazorElectric className="text-danger" style={{ fontSize: "11px" }} />,
    label: "Barber",
    className: "bg-danger-subtle border border-danger border-2 text-danger",
  },
  {
    icon: <PiHairDryerFill className="text-info" />,
    label: "Stylist",
    className: "bg-info-subtle border border-info border-2 text-info",
  },
  {
    icon: <FaHandHoldingWater className="text-warning" />,
    label: "Manicure",
    className: "bg-warning-subtle border border-warning border-2 text-warning",
  },
  {
    icon: <GiLargePaintBrush className="text-primary" />,
    label: "Color",
    className: "bg-primary-subtle border border-primary border-2 text-primary",
  },
  {
    icon: <TbMassage className="text-secondary" />,
    label: "Massage",
    className: "bg-secondary-subtle border border-secondary border-2 text-secondary",
  },
  {
    icon: <GiFootprint className="text-success" />,
    label: "Pedicure",
    className: "bg-success-subtle border border-success border-2 text-success",
  },
  {
    icon: <FaSwimmingPool className="text-black" />,
    label: "Spa Tech",
    className: "bg-light border border-black border-2 text-black",
  },
  {
    icon: <BsSunglasses style={{ color: "#8e44ad" }} />,
    label: "Laser",
    className: styles["badge-purple-light"],
  },
  {
    icon: <RiSyringeFill style={{ color: "#f83a00" }} />,
    label: "Fillers",
    className: styles["badge-orange-light"],
  },
  {
    icon: <GiSyringe style={{ color: "#ff0080" }} />,
    label: "Botox",
    className: styles["badge-pink-light"],
  },
  {
    icon: <PiNeedleDuotone className="text-info" />,
    label: "Tatoo",
    className: "bg-info-subtle border border-info border-2 text-info",
  },
  {
    icon: <GiCrystalEarrings className="text-warning" />,
    label: "Piercing",
    className: "bg-warning-subtle border border-warning border-2 text-warning",
  },
];

const ProfileBadges = () => (
  <div >
             <h6 className="w3-large mb-3 ">
                <AiFillSafetyCertificate className="fa-fw"/>
                     
                          <b style={{ marginLeft: "3px" }}>Badges</b>
                        </h6>
    {badges.map((badge, index) => (
  <Badge
  key={index}
  className={classNames(styles.badgeShared, styles.badgeContainer, badge.className)}
>
        <span className={styles.icon}>{badge.icon}</span>
        <span>{badge.label}</span>
      </Badge>
    ))}
    <div className={styles.learnMore} style={{ marginTop: "12px" }}>
      <Link className="text-muted">
        <i className="fa fa-info-circle"></i> Learn more about badge designations.
      </Link>
    </div>
  </div>
);

export default ProfileBadges;
