// Images
import IntroBookCoverJpg from "../../images/intro-book-cover.jpg";
import IntroBookAuthor from "../../images/intro-book-author.jpg";

// CSS
import "./Book.scss";

const Book = (props) => {
	return (
		<div className="book">
			<ul className="cover">
				<li>
					<div className="design">
						<img src={IntroBookCoverJpg} alt="man" />
					</div>
				</li>
				<li></li>
			</ul>

			<ul className="pages">
				<li></li>
				<li>
					<div className="content">
						<div className="image">
							<img src={IntroBookAuthor} alt="author" />
						</div>
						<h6>A Book by John Doe</h6>
					</div>
				</li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			<ul className="back">
				<li></li>
				<li></li>
			</ul>

			<ul className="spine">
				<li></li>
				<li></li>
			</ul>
		</div>
	);
};

export default Book;
