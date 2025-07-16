'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import CityProvinceFilter from "@/components/CityProvinceFilter";
import { City } from "@/types/City";
import LanguageFilter from "@/components/LanguageFilter";

const LANGUAGES = 
[
  'Akan',
  'English',
  'Swahili',
  'Rundi',
  'Somali',
  'Oromo',
  'Arabic',
  'Hebrew',
  'Amharic',
  'Turkish',
  'Azerbaijani',
  'Armenian',
  'Punjabi',
  'Urdu',
  'Persian',
  'Gujarati',
  'Hindi',
  'Tamil',
  'Malayalam',
  'Telugu',
  'Cantonese',
  'Mandarin',
  'Tibetan',
  'Burmese',
  'Korean',
  'Japanese',
  'Tagalog',
  'Ilocano',
  'Malay',
  'Lao',
  'Thai',
  'Vietnamese',
  'Khmer',
  'Spanish',
  'Italian',
  'Portuguese',
  'German',
  'Dutch',
  'Yiddish',
  'Polish',
  'Russian',
  'Ukrainian',
  'Lithuanian',
  'Latvian',
  'Hungarian',
  'Finnish',
  'Estonian',
  'Welsh',
  'Greek',
  'Albanian',
  'Haitian Creole',
  'Kabyle',
  'Georgian',
  'Mongol'
];

const SPECIALIZATIONS = [
  "Express Entry",
  "Study Permit",
  "Work Visa",
  "PNP",
];

export default function ClientPage({cities} : {cities: City[]}) {
  // Multi-select state for location and language
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const toggleChip = (value: string, selected: string[], setSelected: (v: string[]) => void) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="text-2xl font-bold text-primary">
          <a href="/" className="text-[#337ab7]">Immigration Now</a>
        </div>
        <div className="w-1/3">
          <Input placeholder="Search by city, postcode or name" className="w-full" />
        </div>
        <nav className="flex gap-4 items-center">
          <Button variant="outline">Log In</Button>
          <Button>Sign Up and Get Listed</Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-1/4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                {/* Location Multi-select */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <CityProvinceFilter value={selectedLocations} onChange={setSelectedLocations} cities={cities} />
                </div>
                {/* Availability */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <Checkbox /> Remote
                    </label>
                    <label className="flex items-center gap-2">
                      <Checkbox /> In-person
                    </label>
                  </div>
                </div>
                {/* Specialization */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                  <div className="space-y-2">
                    {SPECIALIZATIONS.map((spec) => (
                      <label key={spec} className="flex items-center gap-2">
                        <Checkbox /> {spec}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Minimum Rating */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
                  <select className="w-full border rounded p-2">
                    <option>Any Rating</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                    <option>2+ Stars</option>
                  </select>
                </div>
                {/* Years of Experience */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                  <select className="w-full border rounded p-2">
                    <option>Any Experience</option>
                    <option>5+ Years</option>
                    <option>10+ Years</option>
                    <option>15+ Years</option>
                    <option>20+ Years</option>
                  </select>
                </div>
                {/* Price Range */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <select className="w-full border rounded p-2">
                    <option>Any Price</option>
                    <option>$0 - $1,000</option>
                    <option>$1,000 - $2,000</option>
                    <option>$2,000 - $3,000</option>
                    <option>$3,000+</option>
                  </select>
                </div>
                {/* Languages Multi-select */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Languages Spoken</label>
                  <LanguageFilter languages={LANGUAGES} value={selectedLanguages} onChange={setSelectedLanguages} />
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">Immigration Consultants in Toronto</h1>
            {/* Active Filters */}
            {/* <div className="flex gap-2 mb-4 flex-wrap">
              {selectedLocations.map((loc) => (
                <span key={loc} className="px-3 py-1 rounded-full bg-[#337ab7] text-white text-sm">{loc}</span>
              ))}
              {selectedLanguages.map((lang) => (
                <span key={lang} className="px-3 py-1 rounded-full bg-[#337ab7] text-white text-sm">{lang}</span>
              ))}
  
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">Remote</span>
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">Express Entry</span>
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">4+ Stars</span>
            </div> */}
            {/* Consultant Cards */}
            <div className="space-y-4">
              {/* Consultant Card 1 */}
              <Card className="flex gap-6 items-center p-6">
                <img src="https://via.placeholder.com/96" alt="Consultant" className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-primary">John Smith</h2>
                    <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">RCIC License #R123456</p>
                  <p className="text-text-secondary text-sm">Toronto, ON  Remote Available</p>
                  <p className="mt-2">Specializing in Express Entry and Provincial Nominee Programs with over 10 years of experience.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Languages: English, French</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Experience: 10 years</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Fee: $1,500 - $2,500</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.8/5</div>
                    <div className="text-sm text-text-secondary">125 reviews</div>
                  </div>
                  <Button>Contact</Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </Card>
              {/* Consultant Card 2 */}
              <Card className="flex gap-6 items-center p-6">
                <img src="https://via.placeholder.com/96" alt="Consultant" className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-primary">Sarah Johnson</h2>
                    <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">Immigration Lawyer  LSO #L567890</p>
                  <p className="text-text-secondary text-sm">Toronto, ON  In-person Only</p>
                  <p className="mt-2">Expert in Study Permits and Work Visas. Fluent in English, French, and Mandarin.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Languages: English, French, Mandarin</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Experience: 15 years</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Fee: $2,000 - $3,000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.6/5</div>
                    <div className="text-sm text-text-secondary">89 reviews</div>
                  </div>
                  <Button>Contact</Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </Card>
              <Card className="flex gap-6 items-center p-6">
                <img src="https://via.placeholder.com/96" alt="Consultant" className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-primary">Sarah Johnson</h2>
                    <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">Immigration Lawyer  LSO #L567890</p>
                  <p className="text-text-secondary text-sm">Toronto, ON  In-person Only</p>
                  <p className="mt-2">Expert in Study Permits and Work Visas. Fluent in English, French, and Mandarin.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Languages: English, French, Mandarin</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Experience: 15 years</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Fee: $2,000 - $3,000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.6/5</div>
                    <div className="text-sm text-text-secondary">89 reviews</div>
                  </div>
                  <Button>Contact</Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </Card>
              <Card className="flex gap-6 items-center p-6">
                <img src="https://via.placeholder.com/96" alt="Consultant" className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-primary">Sarah Johnson</h2>
                    <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">Immigration Lawyer  LSO #L567890</p>
                  <p className="text-text-secondary text-sm">Toronto, ON  In-person Only</p>
                  <p className="mt-2">Expert in Study Permits and Work Visas. Fluent in English, French, and Mandarin.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Languages: English, French, Mandarin</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Experience: 15 years</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Fee: $2,000 - $3,000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.6/5</div>
                    <div className="text-sm text-text-secondary">89 reviews</div>
                  </div>
                  <Button>Contact</Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </Card>
              <Card className="flex gap-6 items-center p-6">
                <img src="https://via.placeholder.com/96" alt="Consultant" className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-primary">Sarah Johnson</h2>
                    <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">Immigration Lawyer  LSO #L567890</p>
                  <p className="text-text-secondary text-sm">Toronto, ON  In-person Only</p>
                  <p className="mt-2">Expert in Study Permits and Work Visas. Fluent in English, French, and Mandarin.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Languages: English, French, Mandarin</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Experience: 15 years</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Fee: $2,000 - $3,000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.6/5</div>
                    <div className="text-sm text-text-secondary">89 reviews</div>
                  </div>
                  <Button>Contact</Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </Card>
              <Card className="flex gap-6 items-center p-6">
                <img src="https://via.placeholder.com/96" alt="Consultant" className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-primary">Sarah Johnson</h2>
                    <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">Immigration Lawyer  LSO #L567890</p>
                  <p className="text-text-secondary text-sm">Toronto, ON  In-person Only</p>
                  <p className="mt-2">Expert in Study Permits and Work Visas. Fluent in English, French, and Mandarin.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Languages: English, French, Mandarin</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Experience: 15 years</span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">Fee: $2,000 - $3,000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.6/5</div>
                    <div className="text-sm text-text-secondary">89 reviews</div>
                  </div>
                  <Button>Contact</Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-8 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Immigration Now</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">For Consultants</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
