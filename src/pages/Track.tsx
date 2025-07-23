import React, { useState, useRef } from 'react';
import { getShipmentByTracking, Shipment } from '../services/shipmentService';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { toast } from 'react-toastify';
import {
  FaSearch,
  FaBox,
  FaTruck,
  FaWarehouse,
  FaShippingFast,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBoxOpen,
  FaWeightHanging,
  FaRuler,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPauseCircle,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaPlane,
  FaShip,
  FaTruckLoading,
  FaHandshake,
  FaHeadset,
  FaCreditCard,
  FaDollarSign,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSpinner,
  FaCheck,
  FaCopy,
  FaArrowRight,
} from 'react-icons/fa';
import AnimatedCard from '../components/animations/AnimatedCard';

const Track: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTrackingForm, setShowTrackingForm] = useState(true);
  const [copied, setCopied] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const formatText = (text: string) => {
    return text
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleCopyTracking = () => {
    navigator.clipboard.writeText(trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Tracking number copied to clipboard!');
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast.error('Please enter a tracking number');
      return;
    }
    setIsLoading(true);
    setError(null);
    setShipment(null);

    try {
      const shipmentData = await getShipmentByTracking(trackingNumber);
      setShipment(shipmentData);
      setShowTrackingForm(false);
    } catch (err) {
      setError('Shipment not found. Please check your tracking number and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  const handleFreightModeClick = (mode: string) => {
    // Find the element with the matching freight mode
    const element = document.getElementById(`freight-mode-${mode.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Add highlight effect
      element.classList.add('animate-pulse');
      setTimeout(() => {
        element.classList.remove('animate-pulse');
      }, 2000);
    }
  };

  const getStatusColor = (status: string) => {
    if (isDarkMode) {
      switch (status.toLowerCase()) {
        case 'delivered':
          return 'text-green-400';
        case 'in_transit':
          return 'text-blue-400';
        case 'delayed':
          return 'text-red-400';
        case 'on_hold':
          return 'text-yellow-400';
        default:
          return 'text-gray-400';
      }
    } else {
      switch (status.toLowerCase()) {
        case 'delivered':
          return 'text-green-600';
        case 'in_transit':
          return 'text-blue-600';
        case 'delayed':
          return 'text-red-600';
        case 'on_hold':
          return 'text-yellow-600';
        default:
          return 'text-gray-600';
      }
    }
  };

  const getStatusIcon = (status: string) => {
    const colorClass = isDarkMode ? {
      delivered: 'text-green-400',
      in_transit: 'text-blue-400',
      delayed: 'text-red-400',
      on_hold: 'text-yellow-400',
      default: 'text-gray-400'
    } : {
      delivered: 'text-green-600',
      in_transit: 'text-blue-600',
      delayed: 'text-red-600',
      on_hold: 'text-yellow-600',
      default: 'text-gray-600'
    };

    switch (status.toLowerCase()) {
      case 'delivered':
        return <FaCheckCircle className={`text-2xl ${colorClass.delivered}`} />;
      case 'in_transit':
        return <FaTruck className={`text-2xl ${colorClass.in_transit}`} />;
      case 'delayed':
        return <FaExclamationTriangle className={`text-2xl ${colorClass.delayed}`} />;
      case 'on_hold':
        return <FaPauseCircle className={`text-2xl ${colorClass.on_hold}`} />;
      default:
        return <FaBox className={`text-2xl ${colorClass.default}`} />;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-800' : 'bg-neutral-white'}`}>
      {/* Hero Section with Tracking */}
      <div className="bg-primary-blue dark:bg-neutral-slate text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Track Your Shipment</h1>
            <p className="text-lg sm:text-xl mb-8 text-neutral-white">Enter your tracking number to get real-time updates</p>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                    className={`w-full px-6 py-4 rounded-lg text-lg ${
                      isDarkMode 
                        ? 'bg-slate-800 text-neutral-white placeholder-grey-300 ' 
                        : 'bg-neutral-white text-neutral-slate placeholder-grey-300 border-grey-300'
                    } focus:ring-2 focus:ring-primary-blue dark:focus:ring-primary-purple focus:border-primary-blue dark:focus:border-primary-purple shadow-md`}
                  />
                  <FaSearch className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'} text-xl`} />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-4 font-semibold rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-primary-purple text-neutral-white hover:bg-primary-blue focus:ring-primary-purple focus:ring-offset-neutral-slate'
                      : 'bg-neutral-white text-primary-blue hover:bg-primary-purple focus:ring-primary-blue focus:ring-offset-primary-blue'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <FaSpinner className="animate-spin" />
                      <span>Tracking...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <FaSearch />
                      <span>Track</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {shipment ? (
        <div className="max-w-7xl mx-auto p-4 sm:p-6" ref={resultsRef}>
          {/* Tracking Number Display */}
              <div className={`rounded-lg p-6 mb-6 ${
                isDarkMode 
              ? 'bg-neutral-slate shadow-md' 
                  : 'bg-neutral-white shadow-md'
              }`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                <h2 className={`text-sm uppercase tracking-wider ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'} mb-2`}>Tracking Number</h2>
                <div className="flex items-center gap-3">
                  <span className={`text-2xl font-bold ${isDarkMode ? 'text-neutral-white' : 'text-neutral-slate'}`}>{shipment.trackingNumber}</span>
                  <button
                    onClick={handleCopyTracking}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      isDarkMode 
                        ? 'hover:bg-slate-700 text-grey-300 hover:text-neutral-white' 
                        : 'hover:bg-grey-300 text-grey-300 hover:text-neutral-slate'
                    }`}
                  >
                    {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                  </button>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-full ${
                shipment.status === 'delivered' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  : shipment.status === 'in_transit'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  : shipment.status === 'delayed'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  : shipment.status === 'on_hold'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
              }`}>
                <span className="font-semibold">{formatText(shipment.status)}</span>
              </div>
                  </div>
              </div>

          {/* Shipment Status Timeline */}
          <div className={`rounded-lg p-6 mb-6 ${
            isDarkMode 
              ? 'bg-neutral-slate shadow-md' 
              : 'bg-neutral-white shadow-md'
          }`}>
            <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>Shipment Progress</h2>
                <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-grey-300 dark:bg-grey-300"></div>
                    {shipment.shipmentHistory?.map((history, index) => {
                      let statusColor;
                let bgColor;
                      let StatusIcon;

                switch (history.status) {
                  case 'delivered':
                    statusColor = isDarkMode ? 'text-green-400' : 'text-green-600';
                    bgColor = isDarkMode ? 'bg-green-400/10' : 'bg-green-100';
                    StatusIcon = FaCheckCircle;
                          break;
                        case 'in_transit':
                          statusColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
                          bgColor = isDarkMode ? 'bg-blue-400/10' : 'bg-blue-100';
                          StatusIcon = FaTruck;
                          break;
                        case 'delayed':
                          statusColor = isDarkMode ? 'text-red-400' : 'text-red-600';
                          bgColor = isDarkMode ? 'bg-red-400/10' : 'bg-red-100';
                          StatusIcon = FaExclamationTriangle;
                          break;
                        case 'on_hold':
                          statusColor = isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
                          bgColor = isDarkMode ? 'bg-yellow-400/10' : 'bg-yellow-100';
                          StatusIcon = FaPauseCircle;
                          break;
                        default:
                          statusColor = isDarkMode ? 'text-neutral-white' : 'text-grey-300';
                          bgColor = isDarkMode ? 'bg-grey-300/10' : 'bg-grey-300';
                          StatusIcon = FaBox;
                      }

                      return (
                  <div key={index} className="relative pl-8 mb-6 last:mb-0">
                    <div className={`absolute left-0 -ml-[13px] mt-[25px] p-1.5 rounded-full ${bgColor}`}>
                      <StatusIcon className={`text-base ${statusColor}`} />
                          </div>
                          <div className={`p-4 rounded-lg ${
                            isDarkMode 
                        ? 'bg-slate-700 shadow-md' 
                              : 'bg-grey-300 shadow-sm'
                          }`}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6">
                              <div>
                                <div className={`font-bold text-sm uppercase mb-1 ${statusColor}`}>
                            {history.status.toUpperCase().replace(/_/g, ' ')}
                                </div>
                          <div className="text-sm text-grey-300 dark:text-gray-100">
                                  {history.date} {history.time}
                                </div>
                              </div>
                        <div className="text-left sm:text-right">
                                <div className={`font-bold text-sm uppercase ${
                                  isDarkMode ? 'text-neutral-white' : 'text-grey-300'
                                }`}>
                                  {history.location}
                                </div>
                          <div className="text-sm text-grey-300 dark:text-gray-100">
                                  {history.remarks}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
          </div>

          {/* Shipment Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Origin & Destination */}
            <div className={`rounded-lg p-6 ${
              isDarkMode 
                ? 'bg-neutral-slate shadow-md' 
                : 'bg-neutral-white shadow-md'
            }`}>
              <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>Route Information</h2>
              <div className="space-y-6">
                <div>
                  <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Origin</div>
                  <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    <FaMapMarkerAlt className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                    <span className="font-medium">{shipment.origin}</span>
                  </div>
                </div>
                <div>
                  <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Destination</div>
                  <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    <FaMapMarkerAlt className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                    <span className="font-medium">{shipment.destination}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Summary */}
            <div className={`rounded-lg p-6 ${
              isDarkMode 
                ? 'bg-neutral-slate shadow-md' 
                : 'bg-neutral-white shadow-md'
            }`}>
              <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>Package Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`text-sm uppercase tracking-wider ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Total Packages</div>
                  <div className={`font-medium ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    {shipment.packages.length}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className={`text-sm uppercase tracking-wider ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Total Weight</div>
                  <div className={`font-medium ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    {shipment.packages.reduce((total, pkg) => total + pkg.weight, 0)} KG
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Shipment Information */}
          <div className={`rounded-lg p-6 mb-6 ${
            isDarkMode 
              ? 'bg-neutral-slate shadow-md' 
              : 'bg-neutral-white shadow-md'
          }`}>
            <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>Shipment Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Carrier</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaTruck className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.carrier}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Type of Shipment</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaBox className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium capitalize">{shipment.typeOfShipment.replace(/_/g, ' ')}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Shipment Mode</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  {shipment.shipmentMode.toLowerCase().includes('sea') ? (
                    <FaShip className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  ) : shipment.shipmentMode.toLowerCase().includes('air') ? (
                    <FaPlane className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  ) : (
                    <FaTruck className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  )}
                  <span className="font-medium capitalize">{shipment.shipmentMode.replace(/_/g, ' ')}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Payment Mode</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaCreditCard className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium capitalize">{shipment.paymentMode.replace(/_/g, ' ')}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Total Freight</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaDollarSign className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">${shipment.totalFreight}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Expected Delivery</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaCalendarAlt className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.expectedDeliveryDate}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Pick-up Date</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaCalendarAlt className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.pickupDate}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Pick-up Time</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaClock className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.pickupTime}</span>
                </div>
              </div>
              <div>
                <div className={`text-sm uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Departure Time</div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  <FaClock className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.departureTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Package Details Table */}
          <div className={`rounded-lg p-6 mb-6 ${
            isDarkMode 
              ? 'bg-neutral-slate shadow-md' 
              : 'bg-neutral-white shadow-md'
          }`}>
            <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>Package Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${isDarkMode ? 'border-grey-300' : 'border-grey-300'}`}>
                    <th className={`py-3 px-4 text-left text-sm font-semibold ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Qty.</th>
                    <th className={`py-3 px-4 text-left text-sm font-semibold ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Piece Type</th>
                    <th className={`py-3 px-4 text-left text-sm font-semibold ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Description</th>
                    <th className={`py-3 px-4 text-left text-sm font-semibold ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Length(cm)</th>
                    <th className={`py-3 px-4 text-left text-sm font-semibold ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Width(cm)</th>
                    <th className={`py-3 px-4 text-left text-sm font-semibold ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Height(cm)</th>
                    <th className={`py-3 px-4 text-left text-sm font-semibold ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>Weight (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {shipment.packages.map((pkg, index) => (
                    <tr key={index} className={`border-b ${isDarkMode ? 'border-grey-300' : 'border-grey-300'} ${index % 2 === 0 ? (isDarkMode ? 'bg-slate-700/50' : 'bg-grey-300') : ''}`}>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>{pkg.quantity}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>{pkg.pieceType}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>{pkg.description}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>{pkg.length}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>{pkg.width}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>{pkg.height}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>{pkg.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
                </div>
              </div>

              {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shipper Information */}
            <div className={`rounded-lg p-6 ${
              isDarkMode 
                ? 'bg-neutral-slate shadow-md' 
                : 'bg-neutral-white shadow-md'
            }`}>
              <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>Shipper Information</h2>
              <div className={`space-y-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                <div className="flex items-center gap-3">
                  <FaUser className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.shipperName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.shipperAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.shipperPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.shipperEmail}</span>
                </div>
              </div>
            </div>

            {/* Receiver Information */}
            <div className={`rounded-lg p-6 ${
              isDarkMode 
                ? 'bg-neutral-slate shadow-md' 
                : 'bg-neutral-white shadow-md'
            }`}>
              <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>Receiver Information</h2>
              <div className={`space-y-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                <div className="flex items-center gap-3">
                  <FaUser className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.receiverName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.receiverAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.receiverPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className={`text-lg ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                  <span className="font-medium">{shipment.receiverEmail}</span>
                </div>
              </div>
            </div>
                      </div>
                      </div>
      ) : (
        <>
          {/* Features Section */}
          <div className="py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                  Why Choose PetXpress Tracking?
                </h2>
                <p className={`mt-4 text-lg ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  Experience seamless, real-time pet shipment tracking with our advanced logistics system — designed to keep you connected every step of the way.
                </p>
                      </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Real-time Tracking */}
                <AnimatedCard>
                  <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-neutral-slate' : 'bg-neutral-white'} shadow-md`}>
                    <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-primary-purple/10' : 'bg-primary-blue/10'} flex items-center justify-center mb-4`}>
                      <FaMapMarkerAlt className={`text-2xl ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                      Real-time Tracking
                    </h3>
                    <p className={`${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                     Get live updates on your pet’s location, estimated arrival time, and travel status — all in one easy-to-use platform.
                    </p>
                  </div>
                </AnimatedCard>

                {/* Global Coverage */}
                <AnimatedCard>
                  <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-neutral-slate' : 'bg-neutral-white'} shadow-md`}>
                    <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-primary-purple/10' : 'bg-primary-blue/10'} flex items-center justify-center mb-4`}>
                      <FaPlane className={`text-2xl ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                      Global Coverage
                    </h3>
                    <p className={`${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                      Track your pet anywhere in the world with our expansive carrier network and international partners.
                    </p>
                  </div>
                </AnimatedCard>

                {/* Detailed Updates */}
                <AnimatedCard>
                  <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-neutral-slate' : 'bg-neutral-white'} shadow-md`}>
                    <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-primary-purple/10' : 'bg-primary-blue/10'} flex items-center justify-center mb-4`}>
                      <FaBox className={`text-2xl ${isDarkMode ? 'text-primary-purple' : 'text-primary-blue'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                      Detailed Updates
                    </h3>
                    <p className={`${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                      Access full tracking details including transport milestones, location scans, and delivery progress.
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className={`py-12 ${isDarkMode ? 'bg-slate-800' : 'bg-neutral-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                  How It Works
                </h2>
                <p className={`mt-4 text-lg ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                  Tracking your pet’s journey is quick and simple:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary-purple' : 'bg-primary-blue'} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-neutral-white">1</span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                    Enter Tracking Number
                  </h3>
                  <p className={`${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    Input your unique PetXpress tracking ID into the search bar.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary-purple' : 'bg-primary-blue'} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-neutral-white">2</span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                   View Real-Time Updates
                  </h3>
                  <p className={`${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    Instantly see your pet’s current status, location, and ETA.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary-purple' : 'bg-primary-blue'} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-neutral-white">3</span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                    Track Delivery Progress
                  </h3>
                  <p className={`${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    Follow your pet’s route until safe and confirmed arrival at its destination.
                  </p>
                </div>
              </div>
            </div>
          </div>

      {/* About Section */}
          <div className="py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                                    <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-primary-blue'}`}>
                    Your Trusted Shipping Partner
                  </h2>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    With PetXpress, you're never in the dark. We ensure transparency, safety, and constant updates for peace of mind.
                  </p>
                  <ul className={`space-y-4 ${isDarkMode ? 'text-neutral-white' : 'text-grey-300'}`}>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className={isDarkMode ? 'text-primary-purple' : 'text-primary-blue'} />
                      <span>24/7 Pet Tracking Access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className={isDarkMode ? 'text-primary-purple' : 'text-primary-blue'} />
                      <span>Global Pet Shipping Network</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className={isDarkMode ? 'text-primary-purple' : 'text-primary-blue'} />
                      <span>Professional support team</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className={isDarkMode ? 'text-primary-purple' : 'text-primary-blue'} />
                      <span>Reliable, Secure Logistics</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Shipping operations"
                    className="rounded-xl shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Track; 