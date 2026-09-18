import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const businessesData = [
  {
    name: 'ALCA Veg & Non-Veg Catering',
    slug: 'catering',
    description: 'Premium catering services for all types of events, featuring both vegetarian and non-vegetarian menus tailored to your taste.',
    primary_color: '#B71C1C',
    secondary_color: '#FFCDD2',
    contact_email: 'catering@alca.in',
    contact_phone: '+91 90000 00001',
    is_active: true
  },
  {
    name: 'ALCA WOW – Magical Celebrations',
    slug: 'celebrations',
    description: 'Transforming your special moments into magical celebrations. We handle event planning, birthday parties, weddings, and more.',
    primary_color: '#4A148C',
    secondary_color: '#E1BEE7',
    contact_email: 'celebrations@alca.in',
    contact_phone: '+91 90000 00002',
    is_active: true
  },
  {
    name: 'ALCA Media – Photography & Videography',
    slug: 'media',
    description: 'Capturing memories that last a lifetime with our professional photography and videography services for all occasions.',
    primary_color: '#01579B',
    secondary_color: '#B3E5FC',
    contact_email: 'media@alca.in',
    contact_phone: '+91 90000 00003',
    is_active: true
  },
  {
    name: 'ALCA Design – Printing & Graphic Design',
    slug: 'design',
    description: 'Creative graphic design and high-quality printing solutions for your personal and corporate needs.',
    primary_color: '#004D40',
    secondary_color: '#B2DFDB',
    contact_email: 'design@alca.in',
    contact_phone: '+91 90000 00004',
    is_active: true
  },
  {
    name: 'ALCA – Luxury Handcrafted products',
    slug: 'ALCA-products',
    description: 'Exquisite, luxury handcrafted products that bring warmth and elegance to any space.',
    primary_color: '#185e33',
    secondary_color: '#C79A56',
    contact_email: 'sales@ALCAproducts.in',
    contact_phone: '+91 73048 88197',
    is_active: true
  },
  {
    name: 'ALCA Travels',
    slug: 'travels',
    description: 'Your trusted partner for hassle-free travel planning and bookings.',
    primary_color: '#E65100',
    secondary_color: '#FFE0B2',
    contact_email: 'travels@alca.in',
    contact_phone: '+91 90000 00005',
    is_active: true
  }
];

async function seed() {
  console.log('Seeding ALCA Businesses...');

  for (const business of businessesData) {
    // Check if exists
    const { data: existing, error: fetchError } = await supabase
      .from('businesses')
      .select('id')
      .eq('slug', business.slug)
      .single();

    if (existing) {
      console.log(`[Update] Updating ${business.name}...`);
      const { error: updateError } = await supabase
        .from('businesses')
        .update(business)
        .eq('slug', business.slug);
      
      if (updateError) console.error(`Error updating ${business.slug}:`, updateError.message);
    } else {
      console.log(`[Insert] Inserting ${business.name}...`);
      const { error: insertError } = await supabase
        .from('businesses')
        .insert([business]);
      
      if (insertError) console.error(`Error inserting ${business.slug}:`, insertError.message);
    }
  }

  console.log('Seed completed successfully!');
}

seed().catch(console.error);
