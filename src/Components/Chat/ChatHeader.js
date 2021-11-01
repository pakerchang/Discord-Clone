import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import "./ChatHeader.css";

function ChatHeader({ channelName }) {
	return (
		<div className="chatHeader">
			<div className="chatHeader__channelName">
				<h3>
					<span className="chatHeader__hash">#</span>
					{channelName}
				</h3>
			</div>

			<div className="chatHeader__channelBar">
				<NotificationsIcon />
				<EditLocationIcon />
				<PeopleAltIcon />
				<div className="chatHeader__search">
					<input placeholder="Search" />
					<SearchRoundedIcon />
				</div>
				<SendRoundedIcon />
				<HelpRoundedIcon />
			</div>
		</div>
	);
}

export default ChatHeader;
