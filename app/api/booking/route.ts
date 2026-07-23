import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { serviceId, architectId, date, timeSlot, clientInfo } = body;

    // Validate required fields
    if (!serviceId || !date || !timeSlot || !clientInfo?.fullName || !clientInfo?.phone) {
      return NextResponse.json(
        { error: 'Missing required reservation details.' },
        { status: 400 }
      );
    }

    // Generate unique architectural booking reference code
    const referenceCode = `SLZ-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log('----------------------------------------------------');
    console.log('NEW SALONZ ATELIER RESERVATION RECEIVED:');
    console.log(`Reference: ${referenceCode}`);
    console.log(`Service ID: ${serviceId}`);
    console.log(`Architect: ${architectId || 'Next Available Architect'}`);
    console.log(`Date & Time: ${date} at ${timeSlot}`);
    console.log(`Client: ${clientInfo.fullName} (${clientInfo.phone}, ${clientInfo.email})`);
    console.log(`Notes: ${clientInfo.notes || 'None'}`);
    console.log('----------------------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'Reservation logged successfully with SALONZ Concierge.',
      booking: {
        referenceCode,
        serviceId,
        architectId,
        date,
        timeSlot,
        clientName: clientInfo.fullName,
        suite: 'Suite B (Pali Hill Atelier)',
        status: 'CONFIRMED_PENDING_CONCIERGE_SMS',
      },
    });
  } catch (error) {
    console.error('Error processing reservation payload:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while logging reservation.' },
      { status: 500 }
    );
  }
}
