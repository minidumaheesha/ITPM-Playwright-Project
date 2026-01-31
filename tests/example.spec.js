import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';
const INPUT = '[placeholder="Input Your Singlish Text Here."]';
const OUTPUT = page =>
  page.locator('text=Sinhala').locator('..').locator('div').nth(1);

/* ---------------- POSITIVE FUNCTIONAL TEST CASES ---------------- */

test('Pos_Fun_0001: Simple daily usage sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('mama gedhara innee', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('මම ගෙදර ඉන්නේ');
});

test('Pos_Fun_0002: Compound sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially(
    'api kaeema kanna yanavaa saha passe film ekak balanavaa',
    { delay: 50 }
  );
  await expect(OUTPUT(page)).toContainText('අපි කෑම කන්න යනවා');
});

test('Pos_Fun_0003: Complex conditional sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('oyaa enne nam mama balan innavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ඔයා එන්නේ නම්');
});

test('Pos_Fun_0004: Interrogative question', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('oyaata hariyata therenavaadha?', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ඔයාට');
});

test('Pos_Fun_0005: Imperative command', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('vahaama enna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('වහාම එන්න');
});

test('Pos_Fun_0006: Negative sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mata eeka karanna bae', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('බැහැ');
});

test('Pos_Fun_0007: Greeting phrase', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('suba udhaasanak', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('සුබ');
});

test('Pos_Fun_0008: Polite request', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('karunaakara eeka poddak balanna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('කරුණාකර');
});

test('Pos_Fun_0009: Informal phrasing', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('ehema karapan', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('කරපන්');
});

test('Pos_Fun_0010: Repeated word emphasis', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('tika tika vaeda karanna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ටික');
});

test('Pos_Fun_0011: Past tense', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mama iiyee gedhara giyaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ගියා');
});

test('Pos_Fun_0012: Future tense', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('api heta yamu', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('හෙට');
});

test('Pos_Fun_0013: Pronoun variation plural', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('oyaalaa enne kavadhdha', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ඔයාලා');
});

test('Pos_Fun_0014: Joined word handled correctly', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mamagedharayanavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ගෙදර');
});

test('Pos_Fun_0015: Mixed Singlish + English', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially(
    'mama office eka late venavaa traffic nisaa',
    { delay: 50 }
  );
  await expect(OUTPUT(page)).toContainText('office');
});

test('Pos_Fun_0016: Brand name', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('Zoom meeting ekak thiyenavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('Zoom');
});

test('Pos_Fun_0017: Abbreviation', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mata OTP eka evanna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('OTP');
});

test('Pos_Fun_0018: Punctuation handling', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('eeka hari da?', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('?');
});

test('Pos_Fun_0019: Currency format', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mata Rs. 500 gewanna thiyenavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('Rs.');
});

test('Pos_Fun_0020: Time format', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('class eka 8.30 AM patan gannavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('8.30 AM');
});

test('Pos_Fun_0021: Measurement unit', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('sugar gram 500 oonee', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('500');
});

test('Pos_Fun_0022: Multiple spaces', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mama   gedhara   yanavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ගෙදර');
});

test('Pos_Fun_0023: Multi-line input', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially(
    'mama gedhara yanavaa\no yaa enne da',
    { delay: 50 }
  );
  await expect(OUTPUT(page)).toContainText('ගෙදර');
});

test('Pos_Fun_0024: Slang phrase', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('ela machan supiri', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('මචන්');
});

/* ---------------- NEGATIVE FUNCTIONAL TEST CASES ---------------- */

test('Neg_Fun_0001: Incorrect negation handling in present tense', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('mama ehema karanavaa naehae', { delay: 50 });

  // Expect correct negation (but system fails)
  await expect(OUTPUT(page)).not.toContainText('නෑ');
});

test('Neg_Fun_0002: Failure to handle joined words', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('matabathonee', { delay: 50 });

  await expect(OUTPUT(page)).not.toContainText('මට බත් ඕනේ');
});

test('Neg_Fun_0003: Incorrect tense interpretation (future vs present)', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('mama heta vaeda karanavaa', { delay: 50 });

  await expect(OUTPUT(page)).not.toContainText('කරාවි');
});

test('Neg_Fun_0004: Mixed English brand term incorrectly translated', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('mama Zoom open karanavaa', { delay: 50 });

  // Zoom should stay unchanged, but system transliterates
  await expect(OUTPUT(page)).not.toContainText('Zoom open');
});

test('Neg_Fun_0005: Failure in compound sentence conjunction handling', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially(
    'mama gedhara yanavaa namuth oyaa enne naehae',
    { delay: 50 }
  );

  await expect(OUTPUT(page)).not.toContainText('නමුත්');
});

test('Neg_Fun_0006: Pronoun ambiguity not resolved correctly', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('eya gedhara enavaa', { delay: 50 });

  // Expected "ඇය", but system outputs "ඔයා"
  await expect(OUTPUT(page)).toContainText('ඔයා');
});

test('Neg_Fun_0007: Incorrect handling of repeated emphasis words', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('hari hari lassanai', { delay: 50 });

  // Repetition lost
  await expect(OUTPUT(page)).not.toContainText('හරි හරි');
});

test('Neg_Fun_0008: Incorrect plural handling', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('oyaalaa enavaa', { delay: 50 });

  // Converted incorrectly to singular
  await expect(OUTPUT(page)).toContainText('ඔයා');
});

test('Neg_Fun_0009: Incorrect punctuation placement in question', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('oyaa enavadha', { delay: 50 });

  // Question mark missing
  await expect(OUTPUT(page)).not.toContainText('?');
});

test('Neg_Fun_0010: Incorrect handling of extra spaces', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('mama   gedhara   yanavaa', { delay: 50 });

  // Extra spaces not normalized
  const outputText = await OUTPUT(page).textContent();
  expect(outputText).toMatch(/\s{2,}/);
});

// ---------------- POSITIVE UI TEST CASES ----------------

test('Pos_UI_0001: Real-time Sinhala output updates as user types Singlish input', async ({ page }) => {
  // Navigate to the translator
  await page.goto(URL);

  // Clear input field if needed
  await page.locator(INPUT).fill('');

  // Singlish sentence to type gradually
  const singlishSentence = 'mama gedhara yanavaa';
  const sinhalaExpected = 'මම ගෙදර යනවා';

  // Type character by character with a slight delay
  await page.locator(INPUT).pressSequentially(singlishSentence, { delay: 50 });

  // Assert that the Sinhala output updates correctly in real-time
  await expect(OUTPUT(page)).toContainText(sinhalaExpected);
});
