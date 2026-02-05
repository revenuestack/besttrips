#!/bin/bash
# Setup script for autonomous agent generation system

echo "🤖 BestTrips.org - Agent Generation Setup"
echo "========================================"
echo ""

# Check if deployment is complete
echo "Prerequisites check:"
echo ""

# Check if site is live
if curl -s -o /dev/null -w "%{http_code}" https://besttrips.org | grep -q "200"; then
    echo "✅ Site is live at besttrips.org"
else
    echo "❌ Site not accessible yet - complete manual deployment steps first"
    echo "   See DEPLOY_MANUAL_STEPS.md"
    exit 1
fi

# Check if Lyon page loads
if curl -s https://besttrips.org/best-hotels-families-lyon | grep -q "Lyon"; then
    echo "✅ First guide page working"
else
    echo "⚠️  First guide page may have issues - check deployment"
fi

echo ""
echo "🎯 Agent generation system is ready!"
echo ""
echo "Next steps:"
echo "1. Populate D1 with more destinations/places data"
echo "2. Create sub-agent prompt template"
echo "3. Test generation with 5 pages"
echo "4. Enable autonomous generation via HEARTBEAT.md"
echo ""
echo "See besttrips-plan.md in workspace for full implementation guide."
