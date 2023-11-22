import Card from "../card/card";
import "./cart.css";
import images from "../assets/Asset.jpg";
import { FaCartPlus } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { TfiAlignJustify } from "react-icons/tfi";

const Cart = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    console.log(showMenu);
    // useEffect(()=>{
    //     document.addEventListener("mousedown",()=>{
    //         setOpen(false);
    //     })
    // })
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                setOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const products = [
        {
            id: 1,
            image: images,
            name: "Fancy Product",
            exPrice: "",
            price: "$ 18.00 - $ 40.00",
        },
        {
            id: 2,
            image: images,
            name: "Special Item",
            exPrice: "$ 20.00",
            price: "$ 18.00",
        },
        {
            id: 3,
            image: images,
            name: "Sale Item",
            exPrice: "$ 50.00",
            price: "$ 25.00",
        },
        {
            id: 4,
            image: images,
            name: "Popular Item",
            exPrice: "",
            price: "$ 40.00",
        },
        {
            id: 5,
            image: images,
            name: "Sale Item",
            exPrice: "$ 50.00",
            price: "$ 25.00",
        },
        {
            id: 6,
            image: images,
            name: "Fancy Product",
            exPrice: "",
            price: "$ 120.00 - $ 280.00",
        },
        {
            id: 7,
            image: images,
            name: "Special Item",
            exPrice: "$ 20.00",
            price: "$ 18.00",
        },
        {
            id: 8,
            image: images,
            name: "Popular Item",
            exPrice: "",
            price: "$ 40.00",
        },
    ];
    const handleOpen = () => setOpen((i) => !i);

    return (
        <div className="container">
            <header className="main">
                <nav
                    className="navbar"
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems:"center"
                        }}
                    >
                        <a className="logo" href="#">
                            Start Bootstrap
                        </a>
                        <div className="navbar-container">
                            <ul className="nav-link">
                                <li className="nav-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#">about</a>
                                </li>
                                <li className="nav-item dropdown" ref={menuRef}>
                                    <a href="#" onClick={handleOpen} className="toggle">
                                        Shop
                                    </a>
                                    {open && (
                                        <div className="dropdown-items">
                                            <span>
                                                <a href="#" onClick={() => setOpen(false)}>
                                                    All Products{" "}
                                                </a>
                                            </span>
                                            <hr />
                                            <span>
                                                <a href="#" onClick={() => setOpen(false)}>
                                                    Populer Items
                                                </a>
                                            </span>
                                            <span>
                                                <a href="#" onClick={() => setOpen(false)}>
                                                    New Arrivals
                                                </a>
                                            </span>
                                        </div>
                                    )}
                                </li>
                            </ul>
                            <button type="submit" className="cart">
                                <FaCartPlus /> Cart<span>{count}</span>
                            </button>
                        </div>
                        <div className="NavToggele">
                            <a
                                onClick={() => {
                                    setShowMenu(!showMenu);
                                }}
                            >
                                <TfiAlignJustify />{" "}
                            </a>
                        </div>
                    </div>

                    <div
                        className="navbar-mob "
                        style={{ display: showMenu ? "block" : "none" }}
                    >
                        <ul className="nav-link-mob">
                            <li className="nav-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">about</a>
                            </li>
                            <li className="nav-item dropdown" ref={menuRef}>
                                <a href="#" onClick={handleOpen} className="toggle">
                                    Shop
                                </a>
                                {open && (
                                    <div className="dropdown-items">
                                        <span>
                                            <a href="#" onClick={() => setOpen(false)}>
                                                All Products{" "}
                                            </a>
                                        </span>
                                        <hr />
                                        <span>
                                            <a href="#" onClick={() => setOpen(false)}>
                                                Populer Items
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#" onClick={() => setOpen(false)}>
                                                New Arrivals
                                            </a>
                                        </span>
                                    </div>
                                )}
                            </li>
                        </ul>
                        <button type="submit" className="cart">
                            <FaCartPlus /> Cart<span>{count}</span>
                        </button>
                    </div>
                </nav>

                <div className="content">
                    <div className="text">
                        <h1>Shop in Style</h1>
                        <p style={{ fontSize: "20px" }}>
                            With this shop Home page Template
                        </p>
                    </div>
                </div>
            </header>
            <div className="product-list">
                {products.map((product, index) => {
                    return <Card product={product} key={index} updateCount={setCount} />;
                })}
            </div>
            <div className="Footer">Copyright &#169; Your Website 2023</div>
        </div>
    );
};

export default Cart;
