import Link from "next/link";
import SearchPage from "../components/search";
import Fuse from "fuse.js";
import fetch from "isomorphic-unfetch";
import "../scss/navbar.scss";

const ivData = [
  {
    name: "agriculture",
    ulData: [
      {
        name: "agrochemicals",
      },
      {
        name: "seed",
      },
      {
        name: "testing-technology",
      },

    ]
  },
  {
    name: "animal-health",
    ulData: [
      { name: "feeds" },
      { name: "veterinary" }
    ],
  },
  {
    name: "automotive"
  },
  {
    name: "aviation"
  },
  {
    name: "energy-utilities",
    ulData: [
      {
        name: "power-generation"
      }
    ]
  },
  {
    name: "food-beverages",
    ulData: [
      { name: "additives" },
      { name: "beverages" },
      { name: "processed-food" },
      { name: "supplement" }
    ]
  },
  {
    name: "healthcare-services",
    ulData: [
      { name: "healthcare-it" }
    ]
  },
  { name: "information-communication" },
  {
    name: "medical-devices",
    ulData: [
      { name: "cardiovascular-devices" },
      { name: "surgical-devices" },
      { name: "wound-care" },
    ]
  },
  { name: "metals-mining" },
  {
    name: "petrochemicals",
    ulData: [
      { name: "adhesives-sealants" },
      { name: "advanced-materials" },
      { name: "metals-ceramics" },
      { name: "paints-coatings" },
      { name: "seacial-fine-chemicals" },
      { name: "sspeciality-chemicals" },
      { name: "polymers" },
      { name: "water-treatment" }
    ]
  },
  {
    name: "pharmaceuticals",
    ulData: [
      { name: "oncology" },
      { name: "ophthalmology" }
    ]
  }
];

const paData = [
  {
    name: "pharmaceuticals-pa",
    ulData: [
      { name: "indication" },
      { name: "moa" },
      { name: "molecular-type" }
    ]
  }
]


class NavBar extends React.Component {
  state = {
    // navBlock: true,
    searchBlock: false,
    searchInput: "",
    searchOutput: [],
    itemsToShow: {
      cats: {
        toggle: false,
        value: 0
      },
      subCats: {
        toggle: false,
        value: -1
      }
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      searchBlock: false,
      searchInput: ""
    })
  }

  handleChange = (e) => {
    const data = this.props.searchProps;
    console.log("newData", data);
    const options = {
      keys: ['Product_Title']
    }
    let fuse = new Fuse(data, options);
    // const fuseData = [
    //   {
    //     Product_Title: "hello",
    //     slug: "hello"
    //   }
    // ]
    let fuseData = fuse.search(e.target.value);
    console.log(fuseData);
    this.setState({
      searchInput: e.target.value,
      searchOutput: fuseData
    })
  }

  handleClick = (e) => {
    if (e.target.name === "searchIcon") {
      this.setState({
        // navBlock: false,
        searchBlock: true
      })
    }
    else {
      this.setState({
        // navBlock: true,
        searchBlock: false
      })
    }
  }

  handleToggle = (cats, value) => {
    const itemsToShow = { ...this.state.itemsToShow };
    itemsToShow[cats].toggle = !itemsToShow[cats].toggle;
    itemsToShow[cats].value = value;
    this.setState({ itemsToShow });
    console.log(itemsToShow);
  }



  render() {
    return (
      <React.Fragment>
        <nav className="clearfix">
          <div className="image-box">
            <img src="/static/Images/DMI-Logo-White.png" alt="DMI-Logo" />
          </div>
          {/* {this.state.navBlock === true && <React.Fragment> */}
          <div className="nav-items-box">
            <ul className="clearfix main-ul">
              <li>
                <Link href="/">
                  <a>
                    <p>Home</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                  <a>
                    <p>Industry Verticals</p>
                  </a>
                </Link>
                <button onClick={() => this.handleToggle("cats", 1)} className="arrow-down" >^</button>
                <ul className={` ${this.state.itemsToShow.cats.value === 1 && this.state.itemsToShow.cats.toggle === true && "nav-cats"}`}>
                  {ivData.map((iv, ivindex) => (
                    <li key={ivindex} className="nav-cats-item">
                      <Link as={`/category/industry-verticals/${iv.name}`} href={`/mainCategory?main=industry-verticals&&product?=${iv.name}`}>
                        <a>
                          <p>{iv.name}</p>
                        </a>
                      </Link>
                      <button onClick={() => this.handleToggle("subCats", ivindex)} className={iv.ulData && "arrow"}>^</button>
                      <ul className={` ${this.state.itemsToShow.subCats.value === ivindex && "nav-cats-inner"}`}>
                        {iv.ulData && iv.ulData.map((ul, ulindex) => (
                          <li key={ulindex} className="nav-cats-item-inner">
                            <Link as={`/category/industry-verticals/${iv.name}/${ul.name}`} href={`/mainCategory?main=industry-verticals&&product?=${iv.name}&&sub${iv.name}/${ul.name}`}>
                              <a>
                                <p>{ul.name}</p>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link as={`/category/pipeline-analysis`} href={`/mainCategory?main=pipeline-analysis`}>
                  <a>
                    <p>Pipeline Analysis</p>
                  </a>
                </Link>
                <button onClick={() => this.handleToggle("cats", 2)} className="arrow-down" >^</button>
                <ul className={` ${this.state.itemsToShow.cats.value === 2 && this.state.itemsToShow.cats.toggle === true && "nav-cats"}`}>
                  {paData.map((pa, paindex) => (
                    <li key={paindex} className="nav-cats-item">
                      <Link as={`/category/pipeline-analysis/${pa.name}`} href={`/mainCategory?main=pipeline-analysis&&product?=${pa.name}`}>
                        <a>
                          <p>{pa.name}</p>
                        </a>
                      </Link>
                      <button onClick={() => this.handleToggle("subCats", paindex)} className={pa.ulData && "arrow"}>^</button>
                      <ul className={` ${this.state.itemsToShow.subCats.value === paindex && "nav-cats-inner"}`}>
                        {pa.ulData && pa.ulData.map((ul, ulindex) => (
                          <li key={ulindex} className="nav-cats-item-inner">
                            <Link as={`/category/pipeline-analysis/${pa.name}/${ul.name}`} href={`/mainCategory?main=pipeline-analysis&&product?=${pa.name}&&sub${pa.name}/${ul.name}`}>
                              <a>
                                <p>{ul.name}</p>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <p>Our Methodology</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>
                    <p>Contact Us</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    <p>About Us</p>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-icons-box clearfix">
            <img src="/static/icons/shopping-cart.svg" alt="shopping-cart-icon" />

            <img src="/static/icons/search.svg" alt="search-icon" onClick={this.handleClick} name="searchIcon" />
          </div>
          {/* </React.Fragment>} */}


        </nav>
        {this.state.searchBlock === true &&
          <div className="nav-searchbar">
            <SearchPage handleChange={this.handleChange} searchInput={this.state.searchInput} searchOutput={this.state.searchOutput} />
            <button onClick={this.handleClick} className="nav-search-close"><img src="/static/icons/multiply.svg" /></button>
          </div>}
      </React.Fragment>
    );
  }
};

export default NavBar;

{/* <ul>
                  <li>
                    <Link as={`/category/industry-verticals/agriculture`} href={`/mainCategory?main=industry-verticals&&product=agriculture`}>
                      <a>
                        <p>Agriculture</p>
                      </a>
                    </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals/agriculture/agrochemicals`} href={`/mainCategory?main=industry-verticals&&product=agriculture&&sub=agrochemicals`}>
                          <a>
                            <p>Agrochemicals</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals/agriculture/seed`} href={`/mainCategory?main=industry-verticals&&product=agriculture&&sub=seed`}>
                          <a>
                            <p>Seed</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals/agriculture/seed`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Testing and Technology</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Animal Health</p>
                      </a>
                    </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Feeds</p>
                          </a>
                        </Link>
                      </li>
                      <li><Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                        <a>
                          <p>Veterinary</p>
                        </a>
                      </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Automotive</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Aviation</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Energy and Utilities</p>
                      </a>
                    </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Power Generation</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li><Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                    <a>
                      <p>Food and Beverages</p>
                    </a>
                  </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Additives</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Beverages</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Processed Food</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Supplements</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Healthcare Services</p>
                      </a>
                    </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Healthcare IT</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Information & Communication</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Medical Devices</p>
                      </a>
                    </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Cardiovascular Devices</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Surgical Devices</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Woundcare Management</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li><Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                    <a>
                      <p>Metals and Mining</p>
                    </a>
                  </Link>
                  </li>
                  <li>
                    <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                      <a>
                        <p>Petrochemicals</p>
                      </a>
                    </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Adhesives & Sealants</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Advanced Materials</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Metals ceramics & Industrial Materials</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Paints and Coatings</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Special and Fine Chemicals</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Speciality Chemicals</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Polymers</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Water Treatment</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li><Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                    <a>
                      <p>Pharmaceuticals</p>
                    </a>
                  </Link>
                    <ul>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Oncology</p>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link as={`/category/industry-verticals`} href={`/mainCategory?main=industry-verticals`}>
                          <a>
                            <p>Ophthalmology</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul> */}