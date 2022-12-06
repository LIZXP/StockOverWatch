import "./chatbox.scss";
import "./chatbox.js";

export default function chatbox() {
  return (
    <>
      <div class="chatbox js-chatbox">
        <div class="chatbox__header">
          <h3 class="chatbox__header-cta-text">
            <span class="chatbox__header-cta-icon">
              <i class="fas fa-comments"></i>
            </span>
            Let's chat
          </h3>
          <button class="js-chatbox-toggle chatbox__header-cta-btn u-btn">
            <i class="fas fa-chevron-up"></i>
          </button>
        </div>
        <div class="js-chatbox-display chatbox__display"></div>
        <form class="js-chatbox-form chatbox__form">
          <input
            type="text"
            class="js-chatbox-input chatbox__form-input"
            placeholder="Type your message..."
            required
          />
          <button class="chatbox__form-submit u-btn">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
}
