import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import '../css/LookDetail.css';
import '../styles/ExpertPopup.css';

// Import the ExpertPopup component
import ExpertPopup from './ExpertPopup';

// Import necessary icons (add missing ones if needed)
import CropIcon from '@mui/icons-material/Crop';
import TuneIcon from '@mui/icons-material/Tune';
import GridOnIcon from '@mui/icons-material/GridOn';
import StraightenIcon from '@mui/icons-material/Straighten';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

// Import assets from centralized exports
import { 
  logo,
  cartIcon,
  star,
  bag,
  tools,
  collar,
  styles,
  pant,
  coat,
  heart,
  camera,
  whiteDressModel,
  style1,
  style2,
  style3,
  style4,
  style5,
  style6
} from '../../../assets';

// Define the tools array (similar to Look.js)
const toolsArray = [
  { id: 'crop', icon: <CropIcon />, label: 'Crop' },
  { id: 'adjust', icon: <TuneIcon />, label: 'Adjust' },
  { id: 'grid', icon: <GridOnIcon />, label: 'Grid' },
  { id: 'ruler', icon: <StraightenIcon />, label: 'Ruler' },
  { id: 'price', icon: <AccountBalanceWalletIcon />, label: 'Price' },
  { id: 'close', icon: <CloseIcon />, label: 'Close' } // Assuming close functionality here
];

const LookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('accessories');
  const [activeCategory, setActiveCategory] = useState('collar');
  const [showExpertPopup, setShowExpertPopup] = useState(false);
  // State for the *main* tool selection (Crop, Adjust, etc.)
  const [selectedMainTool, setSelectedMainTool] = useState(null);
  const [activeFooterStyle, setActiveFooterStyle] = useState(null); // Track active style in footer

  const sizes = ['M', 'L', 'XL', 'XXL', '3XL'];

  const styleOptions = [
    {
      id: 1,
      image: style1,
      name: 'Basic jumpers',
      category: 'Summer'
    },
    {
      id: 2,
      image: style2,
      name: 'Warm puffer',
      category: 'Summer'
    },
    {
      id: 3,
      image: style3,
      name: 'Bomber',
      category: 'Summer'
    },
    {
      id: 4,
      image: style4,
      name: 'Biker jacket',
      category: 'Summer'
    },
    {
      id: 5,
      image: style5,
      name: 'Summer Style',
      category: 'Summer'
    },
    {
      id: 6,
      image: style6,
      name: 'Casual Look',
      category: 'Summer'
    }
  ];

  const handleStarClick = () => {
    setShowExpertPopup(true);
  };

  // Handler to open the popup
  const handleOpenExpertPopup = (styleName) => {
    setShowExpertPopup(true);
  };
  
  // Placeholder handler for heart button click (stops propagation)
  const handleHeartClick = (e) => {
    e.stopPropagation();
    // Add actual favorite toggle logic here if needed
  };

  // Handler for the main tool buttons (Crop, Adjust, etc.)
  const handleMainToolClick = (toolId) => {
    if (toolId === 'close') {
      navigate('/'); 
    } else {
      setSelectedMainTool(toolId === selectedMainTool ? null : toolId);
    }
  };

  return (
    <div className="page-container">
      <header className="header">
        <img 
          className="logo" 
          src={logo} 
          alt="Areta360" 
          onClick={() => navigate('/')} 
        />
        <IconButton className="cart-button">
          <img src={cartIcon} alt="Cart" />
        </IconButton>
      </header>

      <div className="main-content">
        <div className="main-image-section">
          <div className="action-buttons-container">
            <IconButton className="image-star-button" onClick={handleStarClick}>
              <img src={star} alt="Star" />
            </IconButton>
            <IconButton className="image-heart-button">
              <img src={heart} alt="Heart" />
            </IconButton>
            <IconButton className="image-camera-button">
              <img src={camera} alt="Camera" />
            </IconButton>
          </div>
          <img className="main-image" src={whiteDressModel} alt="Look" />
          <div className="image-counter">Look | 1/4</div>
        </div>

        {/* === Conditionally render the TOOLBAR NEXT TO THE IMAGE === */}
        {activeTab === 'accessories' ? (
          // Show Size Bar when Accessories tab is active
          <div className="size-bar-container"> 
            <div className="size-label">Size: {selectedSize}</div>
            <div className="size-buttons">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Show Main Tools Bar when Tools tab is active
          <div className="main-tools-bar"> 
            {/* Add Tools Label */}
            <div className="main-tools-label">Tools</div> 
            {toolsArray.map((tool) => (
              <button
                key={tool.id}
                className={`tool-button ${selectedMainTool === tool.id ? 'active' : ''}`}
                onClick={() => handleMainToolClick(tool.id)}
                title={tool.label}
              >
                {tool.icon}
              </button>
            ))}
          </div>
        )}
        {/* === End Conditional Toolbar === */}

        <div className="tools-section">
          <div className="tools-header">
            <h2 className="tools-title">
              <img className="tools-icon" src={tools} alt="Tools" />
              Choose and apply
            </h2>
          </div>

          {/* NEW: Wrapper for tabs and categories */}
          <div className="controls-container">
            {/* Accessories/Tools Tabs */}
            <div className="header-tab-buttons">
              <button
                className={`accessories-button ${activeTab === 'accessories' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('accessories');
                }}
              >
                <img src={bag} alt="Accessories" />
                <span>Accessories</span>
              </button>
              <button
                className={`tools-button ${activeTab === 'tools' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('tools');
                }}
              >
                <img src={tools} alt="Tools" />
                <span>Tools</span>
              </button>
            </div>

            {/* Divider Line */}
            <hr className="controls-divider" />

            {/* Category Bar */}
            <div className="category-bar">
              {/* Collar button restored */}
              <button
                className={`category-button ${activeCategory === 'collar' ? 'active' : ''}`}
                onClick={() => setActiveCategory('collar')}
              >
                <img src={collar} alt="" />
                <span>Collar</span>
              </button>
              <button
                className={`category-button ${activeCategory === 'styles' ? 'active' : ''}`}
                onClick={() => setActiveCategory('styles')}
              >
                <img src={styles} alt="" />
                <span>Styles</span>
              </button>
              <button
                className={`category-button ${activeCategory === 'pant' ? 'active' : ''}`}
                onClick={() => setActiveCategory('pant')}
              >
                <img src={pant} alt="" />
                <span>Pant</span>
              </button>
              <button
                className={`category-button ${activeCategory === 'coat' ? 'active' : ''}`}
                onClick={() => setActiveCategory('coat')}
              >
                <img src={coat} alt="" />
                <span>Coat</span>
              </button>
            </div>
          </div>
          {/* END NEW Wrapper */}

          {/* Content Grid (Style Grid) */}
          <div className="style-grid">
            {styleOptions.map((style) => (
              <div 
                key={style.id} 
                className="style-card"
                role="button"
                tabIndex={0}
              >
                <img className="style-image" src={style.image} alt={style.name} />
                <div className="style-info">
                  <div className="style-name">{style.name}</div>
                  <div className="style-category">{style.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer MUST be INSIDE tools-section */}
          <div className="tools-footer">
            <div className="footer-style-names-scroll">
              {styleOptions.map((style) => (
                <button 
                  key={style.id} 
                  className={`footer-style-name ${activeFooterStyle === style.name ? 'active' : ''}`}
                  onClick={() => setActiveFooterStyle(style.name)}
                >
                  {style.name}
                </button>
              ))}
            </div>
            <IconButton className="search-icon-button">
              <SearchIcon />
            </IconButton>
          </div>

        </div> {/* <<< CORRECT Closing tag for tools-section */}
      </div> {/* End of main-content */}

      {/* Render the ExpertPopup */}
      <ExpertPopup 
        isOpen={showExpertPopup}
        onClose={() => setShowExpertPopup(false)}
        navigate={navigate}
      />
    </div>
  );
};

export default LookDetail; 