<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// This is a simple PHP proxy to provide market data on Hostinger Shared Hosting
// Since we can't run Node.js on a "normal" plan, we use this PHP script.

$fallbackData = [
    ["symbol" => "NIFTY 50",  "value" => 24115.50, "change" => 0.82,  "up" => true],
    ["symbol" => "SENSEX",    "value" => 78500.00, "change" => 0.75,  "up" => true],
    ["symbol" => "HDFC Bank", "value" => 1672.35,  "change" => 1.2,   "up" => true],
    ["symbol" => "INFY",      "value" => 1543.80,  "change" => -0.3,  "up" => false],
    ["symbol" => "RELIANCE",  "value" => 2934.10,  "change" => 0.56,  "up" => true],
    ["symbol" => "TCS",       "value" => 3785.40,  "change" => -0.18, "up" => false],
];

// For a real production app, you might want to fetch this from a public API
// using curl in PHP. For now, we return the latest "build-time" style data.

echo json_encode([
    "data" => $fallbackData,
    "updatedAt" => date('c'),
    "source" => "Hostinger PHP Proxy"
]);
?>
